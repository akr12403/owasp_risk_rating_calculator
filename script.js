function calculateRisk() {
    // Likelihood Factors
    const skillLevel = parseInt(document.getElementById("skillLevel").value);
    const motive = parseInt(document.getElementById("motive").value);
    const opportunity = parseInt(document.getElementById("opportunity").value);
    const size = parseInt(document.getElementById("size").value);

    const easeOfDiscovery = parseInt(document.getElementById("easeOfDiscovery").value);
    const easeOfExploit = parseInt(document.getElementById("easeOfExploit").value);
    const awareness = parseInt(document.getElementById("awareness").value);
    const intrusionDetection = parseInt(document.getElementById("intrusionDetection").value);

    // Impact Factors
    const lossConfidentiality = parseInt(document.getElementById("lossConfidentiality").value);
    const lossIntegrity = parseInt(document.getElementById("lossIntegrity").value);
    const lossAvailability = parseInt(document.getElementById("lossAvailability").value);
    const lossAccountability = parseInt(document.getElementById("lossAccountability").value);

    const financialDamage = parseInt(document.getElementById("financialDamage").value);
    const reputationDamage = parseInt(document.getElementById("reputationDamage").value);
    const nonCompliance = parseInt(document.getElementById("nonCompliance").value);
    const privacyViolation = parseInt(document.getElementById("privacyViolation").value);

    // Calculating average severity for each section
    var threatAgentSeverity = (skillLevel + motive + opportunity + size) / 4;
    var vulnerabilitySeverity = (easeOfDiscovery + easeOfExploit + awareness + intrusionDetection) / 4;
    var technicalImpactSeverity = (lossConfidentiality + lossIntegrity + lossAvailability + lossAccountability) / 4;
    var businessImpactSeverity = (financialDamage + reputationDamage + nonCompliance + privacyViolation) / 4;

    // Calculate Likelihood Severity (average of Threat Agent Severity and Vulnerability Severity)
    var likelihoodSeverity = (threatAgentSeverity + vulnerabilitySeverity) / 2;
    
    // Calculate Impact Severity (average of Technical Impact Severity and Business Impact Severity)
    var impactSeverity = (technicalImpactSeverity + businessImpactSeverity) / 2;

    if (businessImpactSeverity == 0) {
        impactSeverity = technicalImpactSeverity;
    }

    // Determine Severity Level (LOW, MEDIUM, HIGH)
    function getSeverityLevel(severity) {
        if (severity < 3) {
            return "LOW";
        } else if (severity < 6) {
            return "MEDIUM";
        } else {
            return "HIGH";
        }
    }

    function overallSeverity(likelihood , impact) {
        if (likelihood == 'LOW' && impact == 'LOW') {
            return 'NOTE';
        }
        if (likelihood == 'MEDIUM' && impact == 'LOW') {
            return 'LOW';
        }
        if (likelihood == 'HIGH' && impact == 'LOW') {
            return 'MEDIUM';
        }
        if (likelihood == 'LOW' && impact == 'MEDIUM') {
            return 'LOW';
        }
        if (likelihood == 'MEDIUM' && impact == 'MEDIUM') {
            return 'MEDIUM';
        }
        if (likelihood == 'HIGH' && impact == 'MEDIUM') {
            return 'HIGH';
        }
        if (likelihood == 'LOW' && impact == 'HIGH') {
            return 'MEDIUM';
        }
        if (likelihood == 'MEDIUM' && impact == 'HIGH') {
            return 'HIGH';
        }
        if (likelihood == 'HIGH' && impact == 'HIGH') {
            return 'CRITICAL';
        }

    }

    const likely = getSeverityLevel(likelihoodSeverity);
    const imp = getSeverityLevel(impactSeverity);

    // Displaying results for each section
    document.getElementById("threatAgentSeverity").innerText = "Threat Agent Severity: " + getSeverityLevel(threatAgentSeverity);
    document.getElementById("vulnerabilitySeverity").innerText = "Vulnerability Severity: " + getSeverityLevel(vulnerabilitySeverity);
    document.getElementById("likelihoodSeverity").innerText = "Likelihood Severity: " + getSeverityLevel(likelihoodSeverity); // Display Likelihood Severity

    document.getElementById("technicalImpactSeverity").innerText = "Technical Impact Severity: " + getSeverityLevel(technicalImpactSeverity);
    document.getElementById("businessImpactSeverity").innerText = "Business Impact Severity: " + getSeverityLevel(businessImpactSeverity);
    document.getElementById("impactSeverity").innerText = "Impact Severity: " + getSeverityLevel(impactSeverity); // Display Impact Severity

    var likelihoodSeverityBox = document.getElementById("likelihoodSeverity");
    var likelihoodSeverityText = getSeverityLevel(likelihoodSeverity)
    likelihoodSeverityBox.classList.remove("low", "medium", "high", "critical", "note");
    likelihoodSeverityBox.classList.add(likelihoodSeverityText.toLowerCase());
    likelihoodSeverityBox.innerText = "Your Overall Likelihood Severity: " + likelihoodSeverityText + " (Level: " + likelihoodSeverity + ")";
    likelihoodSeverityBox.classList.remove("hidden");
    
    var impactSeverityBox = document.getElementById("impactSeverity");
    var impactSeverityText = getSeverityLevel(impactSeverity)
    impactSeverityBox.classList.remove("low", "medium", "high", "critical", "note");
    impactSeverityBox.classList.add(impactSeverityText.toLowerCase());
    impactSeverityBox.innerText = "Your Overall Impact Severity: " + impactSeverityText + " (Level: " + impactSeverity + ")";
    impactSeverityBox.classList.remove("hidden");
    
    const overallSeverityBox = document.getElementById("overallSeverityBox");
    const overallSeverityText = overallSeverity(likely, imp);
    overallSeverityBox.classList.remove("low", "medium", "high", "critical", "note");
    overallSeverityBox.classList.add(overallSeverityText.toLowerCase());
    overallSeverityBox.innerText = "Your Overall Risk Severity: " + overallSeverityText;
    overallSeverityBox.classList.remove("hidden");
}
