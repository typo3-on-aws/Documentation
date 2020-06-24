---
title: Configure Security Group
#subtitle: ...
---

## Introduction

This article is based on the assumption that you are using one of our TYPO3-on-AWS machines images in its default setup.

As part of the instance selection at the AWS Marketplace, you select/configure a **security group**. A security group acts as a virtual firewall for your instance to control incoming and outgoing traffic. This page provides more details about typical security group configurations for TYPO3 on AWS.


## Basic Understanding

In general, we distinguish between *ingress* and *egress* traffic. Ingress traffic, also known as inbound traffic, are requests from clients (e.g. website users) to the instance. Egress traffic, also known as outbound traffic, is the opposite. Your instance typically makes requests to other systems, for example to check for updates and download them, or to download TYPO3 extensions. Other use cases are emails that the system needs to send to recipients.

A security group stores one or multiple rules for inbound and outbound traffic. These rules define which traffic is allowed (or should be blocked) from and to which IP addresses.

From a security point of view, you should always follow the standard advice of "granting least privilege". This means you should determine what users or system need to do and then craft your rules and policies that allow them to perform only those tasks (and nothing more).


## Inbound Rules

As pointed out above, *inbound rules* control the traffic from your users to your instance (and eventually to TYPO3). As TYPO3 is a web application running on a web server, the standard protocol "HTTP" is used. In technical terms, this is TCP port 80. You can, however, reconfigure the web server to serve the website on (almost) any other port if you want. For this documentation, we use the standard for the sake of simplicity.

Another important protocol is HTTPS on port 443. If you configured the web server to use a SSL/TLS certificate and serve the website using HTTPS, double check if the security group allows traffic to HTTPS (TCP port 443).

Finally, you likely want to access the [EC2 instance](../miscellaneous/glossary.md#ec2instance){.fa-icon .fa-right-glossary} using SSH. This is TCP port 22 in technical terms.

These two or three rules are all you need for a standard TYPO3 website. Depending on your individual use case (e.g. if you deploy further systems on the same instance), you possibly want to add further rules.

We now know the type (e.g. "HTTP"), the protocol ("TCP" in our cases), and the ports (e.g. "80" for standard web requests). The last element that is required for an inbound rule is the *IP address*. This defines the source of the request that is allowed to access a service. In most cases, you do not want to limit the access to your TYPO3 website and allow everyone to access it. This can be achieved by using `0.0.0.0/0` as the source IP address for IPv4 and `::/0` for IPv6. Otherwise, enter the IP address(es) in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing){.fa-icon .fa-right-external-link-alt} as the source IP address.

The following table shows a typical standard configuration for inbound rules:

| Type:       | Protocol: | Port range: | Source:        |
| :---------- | :-------- | :---------- | :------------- |
| HTTP        | TCP       | 80          | 0.0.0.0/0      |
| HTTP        | TCP       | 80          | ::/0           |
| HTTPS       | TCP       | 443         | 0.0.0.0/0      |
| HTTPS       | TCP       | 443         | ::/0           |
| SSH         | TCP       | 22          | 0.0.0.0/0      |
| SSH         | TCP       | 22          | ::/0           |

Once again: follow the advice of granting least privilege. If you have a static IP address in your office, you could possibly limit SSH access to only this IP address, rather than open SSH for the everyone.


## Outbound Rules

Let's turn to the outbound rules now. The only difference between the configuration of inbound and outbound rules is that you define the *destination* IP address in the outbound rules instead of the source IP address.

By default, outbound traffic from the [EC2 instance](../miscellaneous/glossary.md#ec2instance){.fa-icon .fa-right-glossary} is not limited as the following tables shows:

| Type:       | Protocol: | Port range: | Destination:   |
| :---------- | :-------- | :---------- | :------------- |
| All traffic | All       | All         | 0.0.0.0/0      |
| All traffic | All       | All         | ::/0           |

For a TYPO3 server, it could make sense to only allow outgoing traffic to HTTP and HTTPS destinations. To configure this, delete all existing rules and replace them with new rules. Use "HTTP" as the type, "TCP" as the protocol, and "80" as the port. Add another rule for HTTPS (port 443). This would allow TYPO3 to check for updates and download extensions for example. This also lets the operating system Debian GNU/Linux to check and download system updates.

| Type:       | Protocol: | Port range: | Destination:   |
| :---------- | :-------- | :---------- | :------------- |
| HTTP        | TCP       | 80          | 0.0.0.0/0      |
| HTTP        | TCP       | 80          | ::/0           |
| HTTPS       | TCP       | 443         | 0.0.0.0/0      |
| HTTPS       | TCP       | 443         | ::/0           |

However, outgoing emails are blocked for example, as these are sent by using different types and ports. This could be an ideal setup for a TYPO3 development or test server to prevent emails sent out to users accidentally.


## Further Reading

See Wikipedia's [list of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers){.fa-icon .fa-right-external-link-alt} for a comprehensive overview.

The [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html){.fa-icon .fa-right-external-link-alt} contains a detailed description of security groups for EC2 instances.
