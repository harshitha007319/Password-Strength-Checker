function checkPassword() {
    const password = document.getElementById("password").value;

    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[^A-Za-z0-9]/.test(password);

    updateRule("length", length);
    updateRule("uppercase", uppercase);
    updateRule("lowercase", lowercase);
    updateRule("number", number);
    updateRule("special", special);

    let score = 0;

    if (length) score++;
    if (uppercase) score++;
    if (lowercase) score++;
    if (number) score++;
    if (special) score++;

    const strength = document.getElementById("strength");
    const result = document.getElementById("result");

    if (password.length === 0) {
        strength.style.width = "0%";
        result.textContent = "Enter a password";
        return;
    }

    if (score <= 2) {
        strength.style.width = "40%";
        result.textContent = "⚠️ Weak Password";
    } else if (score <= 4) {
        strength.style.width = "70%";
        result.textContent = "🟡 Medium Password";
    } else {
        strength.style.width = "100%";
        result.textContent = "🟢 Strong Password";
    }
}

function updateRule(id, passed) {
    const rule = document.getElementById(id);

    if (passed) {
        rule.textContent = "✅ " + rule.textContent.substring(2);
    } else {
        rule.textContent = "❌ " + rule.textContent.substring(2);
    }
}