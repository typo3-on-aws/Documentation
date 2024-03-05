---
title: Costs and Budget Planning
firstHeadline: Costs and Budget Planning
section: Frequently Asked Questions
breadcrumb:
    - label: 'Frequently Asked Questions'
      url: '../'
---

**How much does a hosting setup in the "cloud" cost?**

This depends on how much you use. The [TYPO3 machine images](../machine-images/index.md) are offered free of charge and we only use free and open-source software by default, so no license fees occur. However, usage fees apply when instances are running. You can optionally add further AWS components to your infrastructure. The more you use, the more expensive your setup becomes.

Said that, one of the great benefits of Amazon Web Services is that you only pay what you use.

**How much does it cost to run an EC2 instance for TYPO3?**

This mainly depends on the instance geo-location and type (the size of the server), the disk space you allocate to it, and how much data you transfer. It also depends on how long you run the instance. By using AWS, you benefit from **per second billing** (EC2 usage are billed on one second increments, with a minimum of 60 seconds). Instance types comprise varying combinations of CPU, memory, storage, and networking capacity.

Let's ignore the disk space and data transfer for a moment (these factors usually don't affect the costs too much if you keep them in normal parameters) and use the following example: A very small `t3.nano` instance geographically located in the US costs US $0.0052 per hour. This is US $0.1248 per day or less than US $4.- per month. For a TYPO3 instance in production, you likely require a more powerful instance. A `t3.medium` offers 2 vCPU, 4 GiB memory and costs approximately US $1.- per day. The more you use, the more expensive your setup becomes.

**Do I have to pay for stopped or hibernated EC2 instances?**

Once you stopped an EC2 instance (or switched it to the *hibernation* state), no additional charge incur, beyond the storage costs and any other EC2 resources you may be using.

**Can I estimate the required budget?**

One of the great benefits of AWS is that you only pay what you use. As your usage may vary from minute-to-minute, hour-to-hour, day-to-day, month-to-month, many users find it difficulty to estimate (or predict) their AWS budget. Amazon Web Services offer several options to calculate/estimate costs:

- The [TCO Calculator](https://aws.amazon.com/tco-calculator/) (to calculate your total cost of ownership).
- The [AWS Pricing Calculator](https://calculator.aws/) (to calculate your monthly costs with AWS).

**What is the "AWS Free Tier" offer?**

AWS Free Tier includes 750 hours of Linux and Windows `t2.micro` instances each month for one year.
See [AWS Free Tier](https://aws.amazon.com/free/) for further details.

**How can I save costs?**

AWS offers a few options to reduce ongoing usage costs. For savings on EC2 instances you may want to consider savings plans, reserved instances, and spot instances. Refer to the [Amazon EC2 pricing page](https://aws.amazon.com/ec2/pricing/) for further details.
