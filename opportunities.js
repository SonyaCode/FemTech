document.getElementById('submit').addEventListener('click', function() {
    // Collect the selected student status
    let studentStatus = document.querySelector('input[name="student_status"]:checked');
    studentStatus = studentStatus ? studentStatus.value : 'None';

    // Collect selected jobs
    let jobs = [];
    document.querySelectorAll('input[name="jobs"]:checked').forEach(checkbox => {
        jobs.push(checkbox.value);
    });

    // Collect selected industries
    let industries = [];
    document.querySelectorAll('input[name="industries"]:checked').forEach(checkbox => {
        industries.push(checkbox.value);
    });

    // Store the results
    let results = {
        studentStatus: studentStatus,
        jobs: jobs,
        industries: industries
    };

    console.log('Survey Results:', results);

    // Map job titles and industries to opportunities
    const opportunities = {
        jobs: {
            'Software Engineer (SWE)': ['Tech Internships', 'Software Development Bootcamps'],
            'Hardware Engineer': ['Hardware Design Competitions', 'Hardware Engineering Jobs'],
            'Project Manager (PM)': ['Management Training Programs', 'PM Job Openings'],
            'User Experience (UX) Designer': ['UX Design Workshops', 'UX Design Jobs'],
            'Back-End Developer': ['Backend Developer Bootcamps', 'Backend Jobs'],
            'Cybersecurity Engineer': ['Cybersecurity Certification Programs', 'Cybersecurity Jobs'],
            'Full Stack Developer': ['Full Stack Developer Courses', 'Full Stack Developer Jobs'],
            'Mechanical Engineer': ['Mechanical Engineering Internships', 'Mechanical Engineer Jobs'],
            'Front-End Developer': ['Front-End Developer Bootcamps', 'Front-End Developer Jobs'],
            'Data Scientist': ['Data Science Bootcamps', 'Data Scientist Jobs'],
            'User Experience Researcher': ['UX Researcher Internships', 'UX Researcher Jobs']
        },
        industries: {
            'Technology': ['Tech Conferences', 'Tech Job Fairs'],
            'Transportation': ['Transportation Industry Networking Events'],
            'Pharmaceutical': ['Pharmaceutical Industry Conferences', 'Pharmaceutical Jobs'],
            'Telecommunications': ['Telecom Internships', 'Telecommunications Industry News'],
            'Manufacturing': ['Manufacturing Expos', 'Manufacturing Jobs'],
            'Mining': ['Mining Industry Conferences', 'Mining Jobs'],
            'Hospitality': ['Hospitality Management Programs', 'Hospitality Industry Events'],
            'Media': ['Media Industry Networking Events', 'Media Jobs'],
            'Agriculture': ['Agriculture Innovation Conferences', 'Agriculture Jobs'],
            'Education': ['Education Conferences', 'Teaching Jobs'],
            'Finance/Economics': ['Finance Internships', 'Economics Research Opportunities'],
            'Health care': ['Healthcare Conferences', 'Healthcare Job Openings']
        }
    };

    // Generate suggestions based on user selections
    let suggestedOpportunities = [];

    jobs.forEach(job => {
        if (opportunities.jobs[job]) {
            suggestedOpportunities = suggestedOpportunities.concat(opportunities.jobs[job]);
        }
    });

    industries.forEach(industry => {
        if (opportunities.industries[industry]) {
            suggestedOpportunities = suggestedOpportunities.concat(opportunities.industries[industry]);
        }
    });

    // Display the suggested opportunities
    displayOpportunities(suggestedOpportunities);
});

// Function to display the opportunities on the page
function displayOpportunities(opportunities) {
    // Clear any previous results
    let resultDiv = document.getElementById('results');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'results';
        document.body.appendChild(resultDiv);
    }
    resultDiv.innerHTML = '';  // Clear the current content

    // Display a message if no opportunities found
    if (opportunities.length === 0) {
        resultDiv.innerHTML = '<p>No opportunities found based on your selection. Please try different options.</p>';
        return;
    }

    // Create a list of opportunities
    let ul = document.createElement('ul');
    opportunities.forEach(opportunity => {
        let li = document.createElement('li');
        li.textContent = opportunity;
        ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
}
