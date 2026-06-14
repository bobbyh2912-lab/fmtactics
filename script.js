function analyzeTactic() {

    const formation =
        document.getElementById("formation").value;

    const mentality =
        document.getElementById("mentality").value;

    const striker =
        document.getElementById("striker").value;

    const midfielder =
        document.getElementById("midfielder").value;

    const winger =
        document.getElementById("winger").value;

    let score = 50;
    let advice = [];
    let playerGuide = [];

    // Formation Logic

    if (formation === "4-3-3 DM Wide") {
        score += 15;
        advice.push("Strong shape for pressing and possession.");
    }

    if (formation === "4-2-3-1 Wide") {
        score += 12;
        advice.push("Excellent balance between attack and defence.");
    }

    if (formation === "5-2-3 WB") {
        score += 8;
        advice.push("Strong defensively but can struggle in midfield.");
    }

    // Mentality Logic

    if (mentality === "Balanced") {
        score += 15;
    }

    if (mentality === "Positive") {
        score += 18;
    }

    if (mentality === "Very Attacking") {
        score -= 5;
        advice.push("Can leave large defensive gaps.");
    }

    // Role Synergy

    if (
        striker === "Advanced Forward" &&
        winger === "Inside Forward"
    ) {
        score += 12;

        advice.push(
            "Good attacking partnership between striker and wide player."
        );
    }

    if (
        midfielder === "Ball Winning Midfielder" &&
        mentality === "Very Attacking"
    ) {
        score += 5;

        advice.push(
            "Ball winner provides some protection during transitions."
        );
    }

    // Weakness Detection

    if (
        mentality === "Very Attacking" &&
        formation === "4-4-2"
    ) {
        advice.push(
            "Midfield may become overrun against stronger opponents."
        );
        score -= 10;
    }

    // Role Recommendations

    const roleProfiles = {
        "Advanced Forward":
            "Acceleration, Pace, Finishing, Off The Ball",

        "Pressing Forward":
            "Work Rate, Aggression, Stamina, Teamwork",

        "Target Forward":
            "Strength, Heading, Jumping Reach",

        "Box To Box Midfielder":
            "Stamina, Work Rate, Passing, Decisions",

        "Deep Lying Playmaker":
            "Vision, Passing, Composure",

        "Ball Winning Midfielder":
            "Tackling, Aggression, Positioning",

        "Inside Forward":
            "Dribbling, Finishing, Pace",

        "Winger":
            "Crossing, Pace, Dribbling",

        "Inverted Winger":
            "Technique, Passing, Flair"
    };

    playerGuide.push(
        `<li><strong>${striker}</strong>: ${roleProfiles[striker]}</li>`
    );

    playerGuide.push(
        `<li><strong>${midfielder}</strong>: ${roleProfiles[midfielder]}</li>`
    );

    playerGuide.push(
        `<li><strong>${winger}</strong>: ${roleProfiles[winger]}</li>`
    );

    if (score > 100) score = 100;
    if (score < 0) score = 0;

    document.getElementById("results").innerHTML = `
        <h2>Tactic Rating: ${score}/100</h2>

        <h3>Analysis</h3>
        <ul>
            ${advice.map(a => `<li>${a}</li>`).join("")}
        </ul>

        <h3>Best Player Types</h3>
        <ul>
            ${playerGuide.join("")}
        </ul>

        <h3>Recommended Improvements</h3>

        <ul>
            <li>Add a holding midfielder if using attacking mentality.</li>
            <li>Maintain at least one defensive role in midfield.</li>
            <li>Ensure enough pace in attack.</li>
            <li>Balance risk and defensive cover.</li>
        </ul>
    `;
}
