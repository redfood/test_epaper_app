function updateDisplay() {
    const now = new Date();
    
    // 1. Update the Clock
    const timeString = now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    });
    document.getElementById('clock').textContent = timeString;

    // 2. Logic for Data Fetching (Optional)
    // We only want to 'hit' an API every 15 minutes to save resources
    if (now.getMinutes() % 15 === 0 && now.getSeconds() === 0) {
        fetchData();
    }
}

async function fetchData() {
    try {
        // Example: Replace with your own weather or calendar API
        // const response = await fetch('https://api.example.com/data');
        // const data = await response.json();
        document.getElementById('content').textContent = "Last Updated: " + new Date().toLocaleTimeString();
    } catch (error) {
        console.error("Fetch failed", error);
    }
}

// Update the DOM once per minute (don't do it every second for e-paper!)
setInterval(updateDisplay, 60000);

// Run immediately on load
updateDisplay();