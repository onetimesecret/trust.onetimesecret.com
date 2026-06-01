# Data Processing Agreement - Onetime Secret

Last modified: February 18, 2026

This Data Processing Agreement ("*Agreement*" or "*DPA*") forms part of the Contract for Services under Onetime Secret's Terms of Service (the “*Principal Agreement*") between Onetime Secret \#602 - 2892 E 10th Ave Vancouver, British Columbia Canada, Business identification number 77690 5960 (referred to as the "*Processor*") and the Company using the Processor's services (referred to as the "*Company*”).

This Agreement governs the specific requirements of Data Protection Laws to the extent that Company’s use of Onetime Secret's services implies the processing of Personal Data subject to Data Protection Laws.

This Agreement aligns with our Privacy Policy where applicable, while addressing the specific data protection requirements for our Global Elite tier services, which operate on logically separated instances.

The term of this Agreement shall follow the term of the Principal Agreement. Terms not defined herein shall have the meaning as set forth in the Principal Agreement.

### *WHEREAS*

A\) The Company acts as a Data Controller (the "*Controller*").

B\) The Company wishes to subcontract certain Services (as defined below), which imply the processing of Personal Data, to Onetime Secret, acting as a Data Processor (the "*Processor*").

C\) The Parties seek to implement a data processing agreement that complies with the requirements of the current legal framework in relation to data processing and with the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of Personal Data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) and other applicable data protection laws.

D\) The Parties wish to lay down their rights and obligations.

### *IT IS AGREED AS FOLLOWS:*

## 1. Definitions and Interpretation

Unless otherwise defined herein, capitalized terms and expressions used in this DPA shall have the following meaning:

1.1) "*Agreement*" means this Data Processing Agreement and all Schedules;

1.2) "*Company Personal Data*" means any Personal Data related to the Company or Company’s customers or employees Processed in connection with the Principal Agreement;

1.3) "*Contracted Processor*" means a Subprocessor;

1.4) "*Data Protection Laws*" means EU Data Protection Laws and, to the extent applicable, the data protection or privacy laws of any other country;

1.5) "*Data Transfer*"\* \*means:

1.  1.  a transfer of Company Personal Data from Controller to the Processor or a Contracted Processor; or
    2.  an onward transfer of Company Personal Data from the Processor to a Subprocessor, or between two establishments of a Subprocessor;

1.6) "*EEA*" means the European Economic Area;

1.7) "*EU Data Protection Laws*" means EU Directive 95/46/EC, as transposed into domestic legislation of each Member State and as amended, replaced or superseded from time to time, including by the GDPR and laws implementing or supplementing the GDPR;

1.8) "*Engagement*" means the period starting at first payment and ending when services are terminated by either party according to the terms of the Principal Agreement.

1.9) "*GDPR*" means EU General Data Protection Regulation 2016/679;

1.10) "*Global Elite*" means the premium tier service offered by the Processor, which operates on logically separated instances and provides enhanced security and customized solutions for organizations prioritizing privacy and compliance.

1.11) "*Onboarding Questionnaire*" means the form used to collect responses from Global Elite customers at the start of engagement, delivered and collected through a subprocessor (see Schedule A). The link to this questionnaire and its contents may change from time to time.

1.12) "*Secret*" or "*Secret Content*" means the sensitive information or data that a user intends to share securely through the Processor's service, that is encrypted in transit and at rest, assigned a unique access link, and automatically destroyed after it has been viewed once, after a specified time period has elapsed or after being deleted manually prior to having been received.

1.13) "*Services*" means the Processor’s secure secret-sharing and sensitive information management platform, including related features, APIs, and ancillary services. The details and pricing of the Services can be found on the Processor’s website.

1.14) "*Subprocessor*" means any person appointed by or on behalf of Processor to process Personal Data on behalf of Controller in connection with the Agreement.

1.15) "*Receipt Link*" means the unique URL provided to the creator of a Secret that displays the Secret's status (whether it has been received, expired, or remains pending) and permits the holder to Purge the Secret prior to receipt. The Receipt Link does not provide access to the Secret Content. Unless the Secret is protected by a passphrase, possession of the Receipt Link is sufficient to exercise deletion rights over the associated Secret.

1.16) "*Purged*" or "*Purged Secret*" means a Secret that has been viewed by its recipient, has met or exceeded its specified retention period, or has been deleted by the holder of the associated Receipt Link, and is therefore no longer accessible through the Processor's service. For clarity, Purged Secrets may temporarily remain in encrypted backup systems for the Backup Retention Period in accordance with Section 10.

1.17) "*Account Data*" means Personal Data associated with a Company's or user's account, including email addresses, authentication credentials, billing information, and usage metadata, but excluding Secret Content.

1.18) "*Backup Retention Period*" means thirty (30) days, being the maximum period during which encrypted backup copies may be retained following deletion from active systems, after which they are automatically deleted.

1.19) "*Operational Retention Period*" means thirty (30) days, being the standard period applied to: (a) server request logs, error monitoring data, and similar diagnostic information before automatic deletion; and (b) post-termination Account Data retention to facilitate data export requests.

1.20) "*Subprocessor Notice Period*" means thirty (30) days, being the minimum advance notice provided to the Company before the Processor engages any new Subprocessor.

The terms, "*Commission*", "*Controller*", "*Data Subject*", "*Member State*", "*Personal Data*", "*Personal Data Breach*",\* \*"*Processing*" and "*Supervisory Authority*" shall have the same meaning as in the GDPR or other applicable Data Protection Law, and their cognate terms shall be construed accordingly.

## 2. Processing of Company Personal Data

2.1) For the purposes of this Agreement, Company Personal Data comprises two distinct categories with different processing characteristics:

a\) Secret Content: encrypted, ephemeral data that is automatically Purged from active systems and may remain in encrypted backup systems for the Backup Retention Period thereafter; and

b\) Account Data: retained for the duration of the Engagement and subject to the deletion provisions in Section 10.

The Processor's ability to respond to certain requests or obligations under this Agreement may differ depending on which category of data is involved, as detailed in the relevant sections.

### Processor shall:

2.2) comply with all applicable Data Protection Laws in the Processing of Company Personal Data and not process Company Personal Data other than on Controller's documented instructions in section 2.

### Controller instructs Processor to process Company Personal Data to:

2.3) provide the Services and related technical support;

2.4) fulfil legal obligations or resolve disputes;

2.5) exercise any internal task aimed to optimise the security, privacy, confidentiality and functionalities of the Services;

2.6) process data as necessary for internal administrative purposes directly related to service provision, including system performance monitoring, security auditing, and compliance verification.

## 3. Processor Personnel

3.1) Processor shall take reasonable steps to ensure the reliability of any employee, agent or contractor of any Contracted Processor who may have access to Company Personal Data, ensuring in each case that access is strictly limited to those individuals who need to know / access the relevant Company Personal Data, as strictly necessary for the purposes of the Principal Agreement, and/or to comply with Data Protection Laws and other relevant legislation in the context of that individual's duties to the Contracted Processor, ensuring that all such individuals are subject to confidentiality undertakings or professional or statutory obligations of confidentiality.

3.2) Data Protection Officer. Based on the Processor's assessment under Articles 37-39 of the GDPR, the Processor is not required to appoint a Data Protection Officer. The Processor does not engage in regular and systematic monitoring of data subjects on a large scale. With respect to Secret Content, data is encrypted at rest using keys not held by the database server. While certain secret creation methods do not provide end-to-end encryption, the Processor does not access or categorize Secret Content, and such content is automatically Purged. This assessment is reviewed annually. Data protection inquiries may be directed to: <privacy@onetimesecret.com>.

3.3) The Processor maintains records of processing activities carried out on behalf of the Controller in accordance with Article 30(2) of the GDPR. Such records shall be made available to the Controller or Supervisory Authority upon request.

## 4. Security

In accordance with Article 32 (1) of the GDPR, the Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation, and the nature, scope, context, and purposes of processing. These measures shall be designed to protect the rights and freedoms of natural persons, considering the risks of varying likelihood and severity, including the risk of a Personal Data Breach.

The Processor shall also assess the risks associated with processing activities and apply measures that are consistent with the requirements set forth in Article 32 (1) GDPR, ensuring the security of Company Personal Data at all times.

## 5. Data Tracking

5.1) No Third-Party Tracking: The Processor does not employ any third-party tracking technologies, analytics services, cookies, pixels, or similar tracking mechanisms that would monitor the behavior of data subjects.

5.2) No Intentional User Tracking: The Processor does not intentionally track, profile, or monitor individual users or their behaviors. The Processor does not create user profiles or engage in behavioral analysis of individual data subjects.

5.3) Limited Operational Logging: The Processor retains server request logs and error monitoring data for the Operational Retention Period solely for the purposes of security monitoring, technical diagnostics, and service improvement. Error monitoring is performed using self-hosted Sentry (hosted within the European Union). This logging:

- Is used exclusively for technical diagnostics, security monitoring, and service improvement
- Collects minimal data necessary for these purposes using Data Scrubbing features both client-side and server-side
- Does not intentionally collect personal data, though some may be incidentally captured in error reports.
- Is processed and stored securely within the EU.

5.4) Purpose Limitation: Any data potentially captured through error monitoring is used solely for the purpose of technical improvements and is not used for marketing, behavioral analysis, targeting, or any other purpose beyond error resolution.

5.5) Server Request Logs: The Processor retains standard server request logs (such as access logs and web server logs) on servers within the regional system for operational and security purposes. These logs are subject to size-based retention and are typically purged within a few days, but depending on traffic level can be up to the Operational Retention Period.

## 6. Subprocessing

Subject to this Agreement, the Company grants general authorization to the Processor to engage Subprocessors and disclose or transfer Company Personal Data to them. The Company acknowledges and approves the Subprocessors listed in Schedule A to this Agreement, understanding that this list may be updated by the Processor from time to time, in which case the Company shall be informed by the Processor of any changes at least the Subprocessor Notice Period prior to engaging any new Subprocessor, providing the opportunity to object to such engagement. Furthermore, the Company authorizes the Processor to disclose and transfer Personal Data to any company within its corporate group.

Processor ensures that Subprocessors are subject to an agreement with Processor no less restrictive and protective than the present Agreement with respect to the protection of Company Personal Data to the extent applicable to the nature of the services provided by the Subprocessor.

## 7. Data Subject Rights

Taking into account the nature of the processing, Processor shall reasonably assist Company for the fulfilment of Company’s obligations to respond to requests to exercise Data Subject rights under the Data Protection Laws.

### Processor shall:

7.1) promptly notify Company if it receives a request from a Data Subject under any Data Protection Law in respect of Company Personal Data; and

7.2) ensure that it does not respond to that request except on the documented instructions of Controller or as required by Applicable Laws to which the Processor is subject, in which case Processor shall to the extent permitted by Applicable Laws inform Controller of that legal requirement before the Contracted Processor responds to the request.

7.3) The Parties acknowledge that the technical design of the Services may limit the practical exercise of certain Data Subject rights with respect to Secret Content specifically. Secrets are encrypted and are automatically Purged after viewing or expiration. As a result:

a\) Access requests (Article 15) cannot be fulfilled for Purged Secrets or for Secrets where the Processor cannot verify the requestor's relationship to the Secret;

b\) Rectification (Article 16) and erasure (Article 17) requests relating to Secret Content may be addressed by the Data Subject or Controller deleting or allowing the Secret to expire;

c\) The Processor will cooperate with Data Subject requests relating to account-level Personal Data (such as email addresses and account metadata) in accordance with Sections 7.1 and 7.2.

## 8. Personal Data Breach

The Processor shall manage any Personal Data Breach in compliance with applicable Data Protection Laws and its internal Personal Data Breach procedures. In the event of a Personal Data Breach affecting Company Personal Data, the Processor shall notify the Company within 72 hours, providing sufficient information to enable the Company to fulfill its obligations under Data Protection Laws, including informing Data Subjects as necessary. In such cases, Processor shall provide Company with information reasonably available to allow Company to meet any obligations to report or inform Data Subjects of the Personal Data Breach under the Data Protection Laws.

Processor shall co-operate with Company and take reasonable commercial steps as are directed by Company to assist in the investigation, mitigation and remediation of each such Personal Data Breach.

Each party shall bear the costs of the investigation, remediation, mitigation, and other related costs to the extent a Data Breach is caused by such party.

Each party shall bear the costs of any fines, penalties, damages, or other related amounts imposed by an authorized regulatory body, governmental agency, or court of competent jurisdiction to the extent arising from such party’s breach of its obligations under this Agreement.

## 9. Data Protection Impact Assessment and Prior Consultation

Processor shall provide reasonable assistance to Company with any data protection impact assessments, and prior consultations with Supervising Authorities or other competent data privacy authorities, which Controller reasonably considers to be required by article 35 or 36 of the GDPR or equivalent provisions of any other Data Protection Law, in each case solely in relation to Processing of Company Personal Data by, and taking into account the nature of the Processing and information available to, the Contracted Processors.

## 10. Deletion or return of Company Personal Data

In case of cessation of any Service involving the Processing of Company Personal Data, the Processor shall delete all Company Personal Data to the extent permitted by applicable laws and in accordance with Processor’s Terms and Conditions and Privacy Policy. Should the Company require a copy of their data, they must request it before the deletion of their account; requests made after the account has been deleted can no longer be considered.

Unless otherwise specified in the Onboarding Questionnaire or required by applicable law, Processor shall retain Account Data for the duration of the Agreement plus the Operational Retention Period thereafter to facilitate any requested data exports. Backup copies shall be maintained for the Backup Retention Period, after which they will be automatically deleted in accordance with our standard procedures.

## 11. Audit rights

Subject to this section 11, Processor shall make available to Company on request all information necessary to demonstrate compliance with this Agreement, and shall allow for and contribute to audits, including inspections, by Company or an auditor mandated by Company in relation to the Processing of the Company Personal Data by the Contracted Processors. Company shall not exercise its audit rights more than once per calendar year except following a Personal Data Breach or an instruction by a regulatory authority. Company shall give Processor at least sixty (60) days prior written notice of its intention to audit Processor pursuant to this Agreement. Audit shall be conducted during Processor’s business hours, shall not disrupt Processor’s operations and shall ensure the protection of the Company’s, Processor’s and other Data Subjects’ Personal Data. Processor and Company shall mutually agree in advance on the date, scope, duration and security and confidentiality controls applicable to the audit. Company acknowledges that the signing of a non-disclosure agreement may be required by the Controller prior to the conduction of the audit.

The Processor may satisfy audit requests by providing existing documentation, including third-party audit reports, certifications (such as SOC 2 or ISO 27001), or written responses to reasonable audit questionnaires. Where the Company reasonably determines that such documentation does not adequately address its concerns, the Company may request an on-site audit in accordance with the provisions above.

The requesting party shall bear the reasonable costs of any audit or inspection conducted under this section, including the Processor's internal costs of facilitating the audit. Where the Processor provides documentation in lieu of an on-site audit, the Processor shall bear its own costs.

Information and audit rights of Company only arise under section 11 to the extent that the Agreement does not otherwise give them information and audit rights meeting the relevant requirements of Data Protection Law.

## 12. Data Transfer

### Processor shall:

12.1) process and store all Data exclusively within the specific geographic region where it was initially collected (EU, UK, or other designated regions) and shall not transfer or authorize the transfer of Data between these distinct regional environments without the prior written consent of the Controller. For clarity:

a\) Data collected from EU data subjects shall remain within EU infrastructure;

b\) Data collected from UK data subjects shall remain within UK infrastructure;

c\) Data collected in other regions shall remain within the infrastructure of that specific region.

This regional data localization policy applies throughout the entire processing lifecycle. The Processor maintains segregated regional processing environments (including separate EU and UK environments) and implements technical and organizational measures to prevent unauthorized cross-regional transfers.

12.2) not transfer or authorize the transfer of Data to countries outside the EU and/or the European Economic Area (EEA) and/or Switzerland. In exceptional circumstances where such transfer becomes absolutely necessary for the performance of the Agreement or to protect vital interests, the Processor must obtain prior written consent from the Company and ensure appropriate safeguards are in place. In such limited cases, the Parties shall rely on EU approved standard contractual clauses (2021 version) or other approved transfer mechanisms to ensure the personal data remains adequately protected.

12.3) not engage in automated individual decision-making, including profiling, as defined under Article 22 of the GDPR, in connection with Company Personal Data.

12.4) impose the same obligations on any sub-processors engaged under this Agreement.

## 13. General Terms

*Compliance with Applicable Laws.* Processor will process Company Personal Data in accordance with this Agreement and Data Protection Laws applicable to its role under this Agreement. Processor is not responsible nor liable for complying with Data Protection Laws solely applicable to Company by virtue of its business or industry.

*Confidentiality.* Each party must keep any information it receives about the other party and its business in connection with this Agreement (“Confidential Information”) confidential and must not use or disclose that Confidential Information without the prior written consent of the other party except to the extent that:

13.1) disclosure is required by law;

13.2) the relevant information is already in the public domain through no fault of the Parties.

*Liability.* The liability of each party under this Agreement shall be subject to the exclusions and limitations of liability set out in the Principal Agreement, including Sections L (Disclaimer of Warranties), M (Limitation of Liability), and N (Release and Indemnification) of the Terms of Service.

*Notices.* All notices and communications given under this Agreement must be in writing and will be sent by email. Controller shall be notified by email sent to the address related to its use of the Services under the Principal Agreement. Processor shall be notified by email sent to the address: <legal@onetimesecret.com>

## 14. Survival

The obligations of the Processor under this Agreement shall survive the termination of this Agreement until all Company Personal Data has been deleted or returned in accordance with Section 10 of this Agreement.

Notwithstanding the completion of the Engagement, termination of the Principal Agreement or of this Agreement, the obligations of the Processor relating to confidentiality in Section 13 shall continue to apply to any Confidential Information disclosed prior to such termination.

## 15. Change in Privacy Laws

Notwithstanding anything to the contrary in the Agreement (including this DPA), in the event of a change in Privacy Laws or a determination or order by a government authority or competent court affecting this DPA or the lawfulness of any processing activities under this DPA, we reserve the right to make any amendments to this DPA as are reasonably necessary to ensure continued compliance with Privacy Laws or compliance with any such orders.

### IN WITNESS WHEREOF, this Agreement is entered into with effect from the date first set out below.

| **Controller** | | **Processor** |
|----------------|---|---------------|
| Signature ______________________________ | | Signature ______________________________ |
| Name _________________________________ | | Name _________________________________ |
| Title __________________________________ | | Title __________________________________ |
| Date Signed ____________________________ | | Date Signed ____________________________ |

------------------------------------------------------------------------

## Schedule A - List of Approved Subprocessors

Onetime Secret engages subprocessors based on functional requirements and customer preferences. The subprocessors listed below are organized by purpose; within each category, some are required for service operation while others represent alternatives that Global Elite customers may select during onboarding.

Service tier affects subprocessor availability and architecture:

*Global Elite (Premium Tier):* customers receive logically dedicated environments (e.g., secrets.yourcompany.com) with isolated application stacks and database instances, though underlying cloud resources may be virtualized. These customers may substitute alternative subprocessors within each functional category as documented in their Onboarding Questionnaire.

*Identity Plus (Mid-Tier)*: operates on multi-tenant infrastructure (e.g., eu.onetimesecret.com) with secure compartmentalization between customers. Custom domain functionality requires third-party network infrastructure that terminates SSL/TLS connections outside the Processor's direct control, as detailed in the Network & Security category below.

Where multiple subprocessors appear within a category, they represent alternatives unless explicitly stated as additive. Core subprocessors (Section A) apply to all service tiers.

### Infrastructure & Hosting

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Hetzner* | EU (Germany, Helsinki) | All | 𐄂 | Computing resources for internal infrastructure, single tenant and multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *UpCloud* | UK (London) or EU (Helsinki, Amsterdam, Frankfurt) | All | ✔ | Computing resources for single tenant and multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *NorthFlank* | UK (London) or EU (Netherlands) | All | ✔ | Container hosting, CI/CD services, managed databases, and computing resources | Account info, app data, network-level web traffic data, IP addresses |
| *DigitalOcean* | EU or CA (Toronto) | All | ✔ | Container hosting, CI/CD services, managed databases, and computing resources | Account info, app data, network-level web traffic data, IP addresses |
| *Catalyst Cloud* | NZ (Porirua) | All | ✔ | Computing resources for multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *CloudFlare* | Global | All | 𐄂 | DNS Management (does not include "Orange Cloud" proxy) | DNS Records, DKIM/DMARC/SPF |

### Security & Network Services

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Approximated* | Global (DNS multicast) | Identity Plus | ✔ | Custom domain with TLS termination | Account info, application data, network-level web traffic data, IP addresses |
| *CloudFlare* | Global | All | ✔ | Network proxy ("Orange Cloud"), Security services, Custom domain with TLS termination | Account info, application data, network-level web traffic data, IP addresses |

### Email Services

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | Purpose | **Categories of Data** |
| *Proton Mail* | Switzerland | All | 𐄂 | Internal communications, customer support | Email addresses, email content |
| *AWS (SES)* | EU | All | ✔ | SMTP transactional email sending, suppression lists, deliverability metrics, bounce/complaint handling | Email addresses, email content, DKIM/DMARC |
| *Lettermint* | EU | All | ✔ | SMTP transactional email sending, suppression lists, deliverability metrics, bounce/complaint handling | Email addresses, email content, DKIM/DMARC |

### Backup & Storage

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Hetzner (Object storage)* | EU (Germany, Finland) | All | ✔ | for | Account info, application data |
| *AWS (S3)* | EU (Frankfurt, Ireland) | Global Elite | ✔ | S3 storage for geo-located encrypted backups | Account info, application data, |

### Payment Processing

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Stripe* | US/EU | All | 𐄂 | Payment processing, invoicing, fraud detection, tax reporting, payment links, checkout services. | Account info, app data, network traffic |

### Forms & Data Processing

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Altcha* | EU | Global Elite | ✔ | Onboarding questionnaire | Account info, app data, network traffic |

### *Subprocessor Entity Details*

<table dir="ltr">
<tbody>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><p><em><strong><strong>Name</strong></strong></em></p></th>
<th dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><p><em><em>Address</em></em></p></th>
<th dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><p><em><em>Jurisdiction</em></em></p></th>
<th dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><p><em><em>Comment</em></em></p></th>
</tr>
&#10;<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="stripe-inc." dir="ltr"><strong><strong>Stripe, Inc.</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="oyster-point-boulevard-south-san-francisco-ca-94080-united-states" dir="ltr">354 Oyster Point Boulevard South San Francisco, CA 94080 United States</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>US</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>EU-US Data Privacy Framework certified</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="cloudflare-inc." dir="ltr"><strong><strong>CloudFlare, Inc.</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="townsend-street-san-francisco-ca-94107-united-states" dir="ltr">101 Townsend Street, San Francisco, CA 94107, United States</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>US</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>EU-US Data Privacy Framework certified</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="northflank-ltd" dir="ltr"><strong><strong>Northflank, Ltd</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="wenlock-road-london-england-n1-7gu-united-kingdom" dir="ltr">20-22 Wenlock Road, London, England N1 7GU, United Kingdom</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>UK</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><br />
</p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="digitalocean-llc" dir="ltr"><strong><strong>DigitalOcean, LLC</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="avenue-of-the-americas-10th-floor-new-york-ny-10013-united-states" dir="ltr">101 Avenue of the Americas, 10th Floor, New York, NY 10013, United States</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>US</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>EU-US Data Privacy Framework certified</em></em></p></td>
</tr>
<tr dir="ltr" style="height: 65.3385px;">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="upcloud-ltd" dir="ltr"><strong><strong>UpCloud Ltd</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="aleksanterinkatu-15-b-7th-floor-00100-helsinki-finland" dir="ltr">Aleksanterinkatu 15 B, 7th floor, 00100 Helsinki, Finland</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>EU</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>UpCloud is ISO 27001:2022, SOC 2 Type II, certified and a member of the CISPE Code of Conduct.</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="lettermint-b.v." dir="ltr"><strong><strong>Lettermint B.V.</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="willemsvaart-16b-unit-1.08-8019-ab-zwolle-netherlands-kvk-99337711" dir="ltr">Willemsvaart 16B, Unit 1.08, 8019 AB Zwolle, Netherlands KVK: 99337711</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>EU</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><br />
</p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="approximated-inc." dir="ltr"><strong><strong>Approximated, Inc.</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="a-delaware-company." dir="ltr">A Delaware Company.</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>US</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>Multi-tenant only</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="proton-ag-proton-mail" dir="ltr"><strong><strong>Proton AG (Proton Mail)</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="route-de-la-galaise-32-1228-plan-les-ouates-geneva-switzerland" dir="ltr">Route de la Galaise 32 1228 Plan-les-Ouates, Geneva Switzerland</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>Switzerland</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><br />
</p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="hetzner-online-gmbh" dir="ltr"><strong><strong>Hetzner Online GmbH</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="industriestr.-25-91710-gunzenhausen-germany" dir="ltr">Industriestr. 25 91710 Gunzenhausen Germany</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>EU </p>
<p>w/ US subsidiary</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>ISO 27001:2022</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="amazon-web-services-inc.-aws" dir="ltr" style="text-align: start;"><strong><strong>Amazon Web Services, Inc. (AWS)</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="terry-avenue-north-seattle-wa-98109-5210-united-states" dir="ltr">410 Terry Avenue North Seattle, WA 98109-5210 United States</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>US</p>
<p>w/ regional subsidiaries</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><em><em>EU-US Data Privacy Framework certified</em></em></p></td>
</tr>
<tr dir="ltr">
<th dir="ltr" style="width: 203.946px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="catalyst-cloud" dir="ltr"><strong><strong>Catalyst Cloud</strong></strong></h5></th>
<td dir="ltr" style="width: 247px; border: 1px solid black; vertical-align: top"><h6 id="catalyst-cloud-address" dir="ltr">Level 3, Catalyst House, 150 Willis Street, Te Aro, Wellington 6011, New Zealand</h6></td>
<td dir="ltr" style="width: 152px; border: 1px solid black; vertical-align: top"><p>NZ</p></td>
<td dir="ltr" style="width: 246px; border: 1px solid black; vertical-align: top"><p><br />
</p></td>
</tr>
<tr dir="ltr" style="height: 73.3247px;">
<th dir="ltr" style="width: 75px; border: 1px solid black; vertical-align: top; background-color: rgb(242, 243, 245)"><h5 id="altcha.org" dir="ltr" style="text-align: start;"><strong><strong>Altcha.org</strong></strong></h5></th>
<td dir="ltr" style="width: 75px; border: 1px solid black; vertical-align: top"><h6 id="bau-software-s.r.o.-lidicka-70019-brno-602-00-czechia" dir="ltr">BAU Software s.r.o. Lidicka 700/19 Brno 602 00 Czechia</h6></td>
<td dir="ltr" style="width: 75px; border: 1px solid black; vertical-align: top"><p>EU</p></td>
<td dir="ltr" style="width: 75px; border: 1px solid black; vertical-align: top"><p><br />
</p></td>
</tr>
</tbody>
</table>

##### 

------------------------------------------------------------------------

## Schedule B - Processing Implementation and Customization

#### *1. Applicability*

This schedule defines how customizations are documented and maintained for *Global Elite* customers. *Identity Plus* deployments operate on standardized configurations without customer-specific modifications.

#### *2. Specification*

All Global Elite implementation requirements are captured through our Onboarding Questionnaire (<https://eu.altcha.org/form/1jt133ieuzcT8mgjDdhKt>). The completed questionnaire becomes part of this Agreement and specifies:

- Selected subprocessors from available alternatives (see Schedule A)
- Regional hosting preferences
- Email delivery configuration (including option to disable)
- Any customer-specific technical requirements

#### *3. Documentation*

Customizations are established through the Onboarding Questionnaire and subsequent written correspondence between the parties in accordance with Section 13, except that for this Schedule the Processor may contact the Controller from any @onetimesecret.com address. Such correspondence constitutes the authoritative record of agreed configurations. Where a customer-specific addendum is prepared, it summarizes but does not supersede the underlying correspondence.

#### *4. Retention*

All customization documentation is maintained for the duration of the service agreement plus five (5) years following termination to support regulatory compliance verification and audit requirements.

------------------------------------------------------------------------

## Schedule C - Technical and Organizational Security Measures

This Schedule describes the technical and organizational measures implemented by the Processor pursuant to Article 32 of the GDPR to ensure a level of security appropriate to the risk.

### 1. Cryptographic Measures

*1.1 Encryption of Secret Content*

Secret Content is encrypted at rest using the following cryptographic scheme:

- Algorithm: AES-256-CBC (Advanced Encryption Standard with 256-bit key in Cipher Block Chaining mode)
- Key Derivation: Encryption keys are derived using SHA-256 from a combination of: (i) a system-level secret not stored alongside encrypted data; (ii) a unique object identifier; and (iii) where applicable, a user-supplied passphrase
- Initialization Vector: Randomly generated per encryption operation
- Implementation: OpenSSL cryptographic library via audited wrapper

The encryption key is not stored and must be reconstructed from its component inputs at decryption time. The database server does not hold the complete key material necessary to decrypt Secret Content.

*1.2 Authentication Credential Protection*

User passphrases and account credentials are protected using adaptive one-way hashing:

- Algorithm: BCrypt with cost factor 12, providing approximately 2^12 iterations of the underlying Blowfish cipher
- Salt: Randomly generated per credential, stored with the hash
- Timing-safe comparison: Verification uses constant-time comparison to prevent timing attacks

The Processor is transitioning new passphrase storage to Argon2id, the winner of the Password Hashing Competition (PHC), which provides enhanced resistance to GPU-based and side-channel attacks.

*1.3 Cryptographic Key Isolation*

The Processor maintains architectural separation between application and data tiers:

- Application servers (which perform encryption and decryption operations) hold the system-level secret component required for key derivation
- Database servers store encrypted Secret Content but do not hold or have access to the system-level secret
- These tiers operate on separate virtual machines with distinct access controls

This separation ensures that unauthorized access to database storage alone does not provide sufficient key material to decrypt Secret Content.

*1.4 Infrastructure Encryption*

Production storage volumes are encrypted at the block level using LUKS (Linux Unified Key Setup) with system defaults, providing full-disk encryption independent of application-layer encryption.

*1.5 Backup Encryption*

Backup data is encrypted using GPG with 4096-bit keys prior to storage. Encryption keys reside only on the originating system; decryption keys are stored offsite and are not present in the production environment. This asymmetric approach ensures that compromise of production systems does not expose backup contents.

### 2. Data Minimization and Ephemeral Processing

- Secret Content is automatically purged upon first access or expiration
- The Processor cannot access decrypted Secret Content without the complete key derivation inputs
- Server request logs containing potential personal data are retained for the Operational Retention Period only

### 3. Backup Retention and Geographic Controls

- Local encrypted backups are retained for seven (7) days
- Geo-located encrypted backups are stored in AWS S3 (Frankfurt, EU) with automatic expiration after thirty (30) days
- Backup storage locations align with the regional data isolation policy described in Section 12 of the Principal DPA

### 4. Encryption in Transit

All data transmitted between clients and the Processor's infrastructure is protected using TLS 1.3 with strong cipher suites.

### 5. Access Controls

- Administrative access to production systems requires multi-factor authentication
- Access to cryptographic key material is restricted to essential operational processes
- Personnel with system access are bound by confidentiality obligations per Section 3 of the Principal DPA

### 6. Organizational Measures

- Annual review of cryptographic implementations against current security guidance
- Incident response procedures as described in Section 8 of the Principal DPA
- Regular assessment of subprocessor security practices

------------------------------------------------------------------------

## UK GDPR Addendum

This Addendum ("UK Addendum") supplements and forms part of the Data Processing Agreement ("Principal DPA") between Onetime Secret ("Processor") and the Company using the Processor's services ("Controller").

### 1. Purpose and Scope

1.1) This UK Addendum applies to the processing of personal data that is subject to the UK GDPR (as defined below) and supplements the Principal DPA to address specific UK data protection requirements.

1.2) This UK Addendum applies in addition to the Principal DPA and does not replace any term of that agreement except where explicitly stated.

### 2. Definitions

For the purposes of this UK Addendum:

2.1) "*UK GDPR*" means the United Kingdom General Data Protection Regulation, as it forms part of the law of England and Wales, Scotland, and Northern Ireland by virtue of section 3 of the <a href="https://www.legislation.gov.uk/ukpga/2018/16/contents" rel="noreferrer" dir="ltr">European Union (Withdrawal) Act 2018</a> and as amended by the <a href="https://www.legislation.gov.uk/uksi/2019/419/schedule/1" rel="noreferrer" dir="ltr">Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019</a>.

2.2) "*Data Protection Act*" means the Data Protection Act 2018.

2.3) "*UK Data Protection Laws*" means the UK GDPR and the Data Protection Act 2018.

2.4) "*ICO*" means the Information Commissioner's Office, the UK's supervisory authority for data protection issues.

2.5) Terms such as "*Controller*", "*Processor*", "*Data Subject*", "*Personal Data*", "*Personal Data Breach*", and "*Processing*" shall have the same meaning as in the UK GDPR when used in this UK Addendum.

### 3. UK-Specific Provisions

3.1) *Supervisory Authority*: For the purposes of the UK GDPR and this UK Addendum, references to "Supervisory Authority" in the Principal DPA shall include the ICO.

3.2) *Data Protection Laws*: References to "EU Data Protection Laws" or "GDPR" in the Principal DPA shall be interpreted to include UK Data Protection Laws where the context requires.

3.3) *UK Data Storage*: All data relating to UK customers is processed and stored exclusively within UK infrastructure.

3.4) *UK Representative*: Based on careful assessment of Article 27(2) of the UK GDPR, the Processor has determined that its processing activities qualify for exemption from the requirement to appoint a UK representative due to:

1.  1.  The time-limited nature of processing (data retained for the Backup Retention Period as defined in the Principal DPA);
    2.  The absence of large-scale special category data processing;
    3.  The privacy-enhancing nature of the service which reduces rather than increases risk to data subjects; and
    4.  The minimal personal data retained (limited to account information).

This assessment is documented and to be reviewed annually.

### 4. Priority

In case of any conflict or inconsistency between the provisions of this UK Addendum and the Principal DPA or any other agreement between the parties, the provisions of this UK Addendum shall prevail to the extent of such conflict or inconsistency in relation to the processing of personal data subject to UK Data Protection Laws.

IN WITNESS WHEREOF, this UK Addendum is entered into and becomes a binding part of the Principal DPA with effect from the date of the last signature below.

| **Controller** | | **Processor** |
|----------------|---|---------------|
| Signature ______________________________ | | Signature ______________________________ |
| Name _________________________________ | | Name _________________________________ |
| Title __________________________________ | | Title __________________________________ |
| Date Signed ____________________________ | | Date Signed ____________________________ |
