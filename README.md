# Covered_By_Sage
Aim: Creating a service that accepts the necessary information and sends emails

Solution: 
	Using open source email provider's api's.
	Better to have more than one email service providers such that if one of the service gets failed we can quickly use another one's.
	
Solution mainly focuses on back-end work.

Used Node.js for building it.
Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

-->better efficiency and overall developer productivity
-->code sharing and reuse
-->speed and performance
-->easy knowledge sharing within a team
-->a huge number of free tools

Resume Link: https://drive.google.com/file/d/17Wejy28CrTaRsph7GdkZd0FcFWgNsaRh/view?usp=sharing

Project running URL: https://covered-by-sage-ckzjo.run-ap-south1.goorm.io/

Note: I am using free account I can host it for limited amount of time.

A package provide an abstraction between multiple email service providers. If one of the services goes down, it will failover to another provider.

Currently supported: Mailgun, SendGrid.

Used API's to integrate with respective service vendors.
Then used promises(resolve and reject) to know whether the response is success or not such that if it fails then it assigns the work to another email service vendor. 

