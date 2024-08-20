# owasp_risk_rating_calculator

As part of my research on understand the significance of Governance, Risk, and Compliance in organizational structures, I came across the Open Worldwide Application Security Project (OWASP)

An open-source non-profit foundation aiming to improve the security of software, OWASP's Risk Rating Methodology emphasized the importance of estimating associated risks to the organization, and highlighting the need for organizations to adhere to regulations and proactively manage their infrastructures for continuity.

The OWASP Risk Rating Calculator makes it possible to estimate the severity of differential risks that could pose reputational and structural harm to an organization. 

The OWASP Risk Rating Calculator estimates the severity of differential risks by estimating the likelihood, or the extent of potential risk harming an organization. Likelihood can be estimated by multiple factors, split into two groups: Threat Agent Factors and Vulnerability Factors. Threat Agent Factors measure the likelihood of successful attacks from a group of possible attackers (Skill Level, Motive, Opportunity, Size) and Vulnerability Factors measure the likelihood of a specific vulnerability being discovered and exploited (Ease of Discovery, Ease of Exploit, Awareness, Intrusion Detection).

The OWASP Risk Rating Calculator also estimate severity of differential risks by estimaing the impact, the effect of a succesful exploitation. Impact can be estimated by evaluating the Technical Impact and Business Impact of a successful exploitation into an organization's infrastructure. The Technical Impact measures the consequences of defective security implementations on the application and production environment (Loss of Confidentiality, Loss of Integrity, Loss of Availability, and Loss of Accountability). The Business Impact, the more important organizational impact factor to account for, measures the consequences of defective security implementations on the organizational infrastructure (Financial damage, Reputation Damage, Non-Compliance, and Privacy Violation).

The Severity of Likelihood and Impact Factors (which returns Low, Medium or High Severity Risk) are combined to form the Overall Risk Severity (which returns Low, Medium, High or Critical Risk Severity).

Having a risk evaluting framework is essential for organizations to emphasize awareness and seriousness of risks and how it harms business continuity.


