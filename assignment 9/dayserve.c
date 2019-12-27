#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <errno.h>
#include <unistd.h>
#include <sys/wait.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <time.h>

#define MY_PORT_NUMBER 49999

int main(int argc, char *argv[]){

  struct sockaddr_in servAddr;
  struct sockaddr_in clientAddr;
  struct hostent* hostEntry;

  int length = sizeof(struct sockaddr_in), listenfd, connectfd;
  char* hostName;
  time_t curtime;
  char *date;
 

  if((listenfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)  //sockect connection
  {
    perror("error listendfd ");
    exit(1);
  }

  // Bind the socket to a port 
  memset(&servAddr, 0, sizeof(servAddr));
  servAddr.sin_family = AF_INET;
  servAddr.sin_port = htons(MY_PORT_NUMBER);
  servAddr.sin_addr.s_addr = htons(INADDR_ANY);
 
//blinds the socket connection 
 if((bind(listenfd, (struct sockaddr *) &servAddr, sizeof(servAddr))) < 0)
 {
    perror("error bind");
    exit(2);
 }

  listen(listenfd,1); //listens and accepts the connection

  while(1)
  {
    waitpid(-1, NULL, WNOHANG);  //takes care about the zombie processors
    printf("connection recieved \n"); //prints to screen once the connection is made
    if ((connectfd = accept(listenfd,(struct sockaddr *) &clientAddr, &length)) < 0) //accepts the connection
    {
      perror("error connectfd");
      exit(1);
    }
    if(fork())  //forks 
    {
      close(connectfd); //close the connection
    }
    else
    {
      close(listenfd);
      break;
    }
  }

  // Getting a text host name 
  if ((hostEntry = gethostbyaddr(&(clientAddr.sin_addr),sizeof(struct in_addr), AF_INET)) == NULL){
    fprintf(stderr, "error hostEntry");
    exit(1);
  }
  
  
  hostName = hostEntry->h_name;
  printf("%s", hostName); //print the name to the screen
  curtime = time(NULL);  //time
  date = ctime(&curtime);//time format
  write(connectfd,date,strlen(date)); //write the day
  close(connectfd);
  return 0;
}
