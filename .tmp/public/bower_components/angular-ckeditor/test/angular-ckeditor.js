'use strict';

var expect = chai.expect;
_.str = s; // clearer exposition of underscore.string

describe('CKEditor directive', function () {
  var $compile, $document, $rootScope, scope, createElement, element;

  beforeEach(module('ckeditor'));

  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    $document = $injector.get('$document');
    scope = $rootScope.$new();

    createElement = function () {
      element = $compile(
        '<div contenteditable="true" ckeditor ng-model="content" ready="onReady()"></div>'
      )(scope);
    };
  }));

  afterEach(function cleanup (done) {
    scope.$destroy();
    $rootScope.$digest(); // needed to resolve the ready promise
    // the cleanup may be async
    setTimeout(function() {
      expect(_.keys(CKEDITOR.instances)).to.have.length(0);
      done();
    });
  });

  describe('lifecycle', function() {
    it('should create a new editor', function (done) {
      scope.onReady = function () {
        expect(_.find(CKEDITOR.instances)).to.exist;
        done();
      };

      createElement();
    });

    it('should put editor out of readonly mode when ready', function (done) {
      scope.onReady = function () {
        expect(_.find(CKEDITOR.instances).readOnly).to.be.false;
        done();
      };
      createElement();
    });

    it('should destroy instance on scope destroy', function (done) {
      scope.onReady = function () {
        done();
      };

      createElement();
      // this is tested in the afterEach "cleanup" above
    });
  });

  it('should call the ready callback on start', function (done) {
    scope.content = 'Hello';
    scope.onReady = done;

    createElement();
  });

  describe('model sync', function() {

    // NOTE : we have to trim CK model since CK adds \n and blanks to do formatting
    // cf. http://dev.ckeditor.com/ticket/3260

    it('should synchronize view to editor', function (done) {
      scope.content = 'Hello';

      scope.onReady = function () {
        // We should wait for the editor to have set data.
        setTimeout(function () {
          expect(element).to.contain('Hello');
          done();
        }, 0);
      };

      createElement();
    });

    it('should synchronize editor to the view', function (done) {
      scope.onReady = function () {
        _.find(CKEDITOR.instances).setData('<p>Hey</p>');

        // Angular CKEditor may take a few setImmediate() to propagate values,
        // so wait a small timeout before testing
        setTimeout(function () {
          expect(_.str.trim(scope.content)).to.equal('<p>Hey</p>');
          done();
        }, 5);
      };

      createElement();
    });

    it('should synchronize editor to the view at start', function (done) {
      scope.onReady = function () {
        // Angular CKEditor may take a few setImmediate() to propagate values,
        // so wait a small timeout before testing
        setTimeout(function () {
          expect(_.str.trim(scope.content)).to.equal('<p>at start !</p>');
          done();
        }, 5);
      };

      scope.content = 'at start !';
      createElement();
    });

    it('should contain only one snapshot at start', function (done) {
      scope.onReady = function () {
        setTimeout(function () {
          expect(_.find(CKEDITOR.instances).undoManager.snapshots.length).to.equal(1);
          done();
        }, 5);
      };

      scope.content = 'at start !';
      createElement();
    });

    it('should update model in a watchable way', function (done) {
      // update in model (cf. below) should be watchable
      scope.$watch('content', function (newTxt) {
        if (!newTxt) return;
        expect(_.str.trim(newTxt)).to.equal('<p>Hey</p>');
        done();
      });

      scope.onReady = function () {
        _.find(CKEDITOR.instances).setData('<p>Hey</p>');
      };

      createElement();
    });
  });

  describe('contenteditable mode', function() {

    describe('when contenteditable attribute is true', function() {
      it('should create an inline editor when contenteditable is true', function (done) {
        scope.onReady = function () {
          expect(_.find(CKEDITOR.instances).editable().isInline()).to.be.true;
          done();
        };

        createElement();
      });
    });

    describe('when contenteditable attribute is false', function() {
      it('should create a non-inline editor when contenteditable is false', function (done) {
        scope.onReady = function() {
          expect(_.find(CKEDITOR.instances).editable().isInline()).to.be.false;
          done();
        };

        var element = angular.element(
          '<textarea ckeditor ng-model="test" ready="onReady()"></textarea>');
        $document.find('body').append(element);
        $compile(element)(scope);
      });
    });
  });

  describe('readonly', function () {
    beforeEach(function (done) {
      scope.content = 'Hello';
      scope.onReady = done;

      var element = $compile(
        '<div contenteditable="true" ckeditor ng-readonly="readonly" ng-model="content" ready="onReady()"></div>'
      )(scope);
    });

    it('should observe the readonly attribute', function () {
      expect(_.find(CKEDITOR.instances).readOnly).to.be.false;

      scope.readonly = true;
      scope.$digest();

      expect(_.find(CKEDITOR.instances).readOnly).to.be.true;

      scope.readonly = false;
      scope.$digest();

      expect(_.find(CKEDITOR.instances).readOnly).to.be.false;
    });
  });
});
