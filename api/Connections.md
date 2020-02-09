# The Language of Connections

>> the connection is an unstructred data type 
>> connections can have a set of self defining connections 
>> a connection has a self connection which defines its attributes
connection:{
	connections:[{
		connection:{
			app:{
				connection:{},
				association:{},
				validation:{},
			}
		},
	}]
}

connection --> connection --> app --> connection --> connection
								  				 --> association
								  				 --> validation


app --> connection --> connection
  				   --> association
  				   --> validation



app --> connection
	--> association
	--> validation



string --> int 

reduction allows for dynamic implementation
&& dynamic implmention allows for reduction
allowed for by encoded higherdimensional structural data 
