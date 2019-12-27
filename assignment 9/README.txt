
***************************************************************************************************************************************************************************************************************************************
Author : Sravani Ravula
School: Washington State University 
Class : CS 360
Professor:Ben McCamish
****************************************************************************************************************************************************************************************************************************************Description: 
These are C programs, dayserve.c and daytime.c using the socket routines discussed in the slides. dayserve.c is a server process that listens on an ephemeral TCP port for a connection. When it receives a connection, it logs the hostname of the client to stdout and writes the current date and time to the client (as text) via the socket connection. Suggestion: start by writing some string of your own choosing to the client. The server should behave as discussed in class. That is, it should fork when a new connection is received and go back to waiting for more connections. daytime.c is a client program that takes one argument on the command line. That argument is the server’s host name or IP address (in dotted decimal). It makes a TCP connection to the indicated host and dayserve’s port number (or indicates the error, if it cannot) and then writes the information received from dayserve to stdout. Use port number 49999  

test: tested using command line ./serve (to run the server side).
				./daytime localhost or (I.P address).


