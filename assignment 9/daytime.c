#include <netdb.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>
#define MY_PORT_NUMBER		49999

int checkconnect(char* arg)
{
	int socketfd;
	struct sockaddr_in servAddr;
	struct hostent* hostEntry;
	struct in_addr **pptr;

//initialize structs

	memset(&servAddr, 0, sizeof(servAddr));
	servAddr.sin_family = AF_INET;
	servAddr.sin_port = htons(MY_PORT_NUMBER);

	if( (socketfd = socket(AF_INET, SOCK_STREAM, 0)) < 0) //blind socketfd 
	{
		perror("error sockect");
		exit(0);
	}
	if((hostEntry = gethostbyname(arg)) < 0)   //get the host name 
	{
		herror("error hostname");
		exit(1);
	}
//magic statemnets
	pptr = (struct in_addr **) hostEntry->h_addr_list;
	memcpy(&servAddr.sin_addr, *pptr, sizeof(struct in_addr));

	if((connect(socketfd, (struct sockaddr *) &servAddr, sizeof(servAddr))) < 0) //connects the machines
	{
		perror("error connect");
		exit(2);
	}
	return(socketfd);
}

int main(int argc, char* argv[])
{
	int socketfd;
	char check[25];                         //buffer for the socket
	socketfd = checkconnect(argv[1]);	//initialize socketfd
	int save= read(socketfd, check, 25);    //reads from the socket
	write(1, check, save);			//writes to the standard out
	close(socketfd);			//close socketfd
	return 0;
}
