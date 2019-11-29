---
title: Frequently Asked Questions
subtitle: SSL/TLS Certifications and HTTPS
---

These FAQ are based on the following articles:

- [Configure Apache to Support HTTPS](../how-to/configure-https-with-apache.md).

## In General

**Terminology: SSL vs. TLS vs. HTTPS**

The acronym "SSL" stands for Secure Sockets Layer. It is a protocol that is used by computer systems (e.g. a web browser and a web server) to encrypt their communication. The cryptography is based on keys and certificates and also ensures authenticity, integrity and validation. "TLS" (Transport Layer Security) is the successor of SSL (newer and more secure versions of the protocol). TLS version 1.0 is documented in [RFC 2246](https://tools.ietf.org/html/rfc2246){.fa-icon .fa-right-external-link-alt} (newer versions exist). HTTP stands for HyperText Transfer Protocol and is a protocol for sending requests and receiving answers between two computer systems in the world wide web (WWW). If this connection is secured by SSL/TLS, the protocol "HTTPS" comes into play: HTTP-within-SSL/TLS.

**What is a Certificate Authority?**

A certificate authority (CA) is an entity that issues SSL/TLS certificates.

**What is a Certificate Sign Request (CSR) and how do I create one?**

In order to purchase a SSL/TLS certificate from an authority, you have to create a private key file and a Certificate Sign Request file (CSR). The CSR is the file you send to an authority, which generates and signs a certificate for you. At least the private key and the certificate need to be installed on the server.

Every authority provides detailed instructions how to generate the CSR and which files you get back from them.

**Where can I obtain a free SSL/TLS certificate?**

A well-known certificate authority that issues free SSL/TLS certificates is [Let's Encrypt](https://letsencrypt.org/){.fa-icon .fa-right-external-link-alt}. Their offer is accompanied by an automated process based on the Automatic Certificate Management Environment (ACME) protocol. The same protocol is also used by other vendors to offer free SSL/TLS certificates.

AWS has a service named [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/){.fa-icon .fa-right-external-link-alt} that lets you provision, manage, and deploy SSL/TLS certificates for use with AWS services.

**I also got an Intermediate Certificate - how do I install this?**

Sometimes (depending on the type of certificate you purchased), you receive one or more Intermediate Certificate files(s) from the certificate authority. Please read the authority's documentation, but in general, you have to include these files in Apache's SSL configuration file, too. Check out directives `SSLCertificateChainFile` and `SSLCACertificateFile`.

## Troubleshooting

**Web browser can not establish a connection to the server (e.g. times out).**

Double check your Security Group:

- Did you save your changes?
- Did you edit the correct Security Group (and is it really used by the instance)?
- Did you enter the correct URL of the instance (maybe try its IP address instead)?

**Web browsers report a problem with the SSL certificate.**

If you use the default SSL/TLS certificate shipped with Debian and Apache, you are using a self-signed certificate which is not trusted by browsers. The solution is to obtain and install a real certificate or to bypass the security warning of your browser and accept the certificate permanently (usually not suitable for a production site).

**Web browser reports a problem with a valid SSL certificate.**

Double check Apache's configuration and review the log files under `/var/log/apache2/` (in particular the file `ssl_access.log`).

**Apache Web Server will not (re-)start.**

Same as above: check Apache's configuration and log files.

## Further Resources

- [How HTTPS Works](https://howhttps.works/){.fa-icon .fa-right-external-link-alt} (explained in a comic)
- Step-by-step instructions how to generate a self-sign certificate in the [Debian Wiki](https://wiki.debian.org/Self-Signed_Certificate){.fa-icon .fa-right-external-link-alt}
