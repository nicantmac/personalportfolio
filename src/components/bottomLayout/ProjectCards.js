const cardData = [
    {
        title: "AI-Powered Front Door Cam",
        image: "/imgs/piCam_snapshot.jpg",
        status: "Continuous Development",
        link: "https://github.com/nicantmac",
        desc: "AI-powered front door camera using a Raspberry Pi Module 4 and Google Coral USB Edge TPU " +
            "for real-time object detection. Used a night vision (NoIR camera module) and PIR motion sensors to " +
            "detect visitors and classify activity with minimal latency. The project demonstrates my exploration" +
            " in edge AI integration and embedded systems."
    },
    {
        title: "ImagineAI",
        image: "/imgs/flower-datasetImg.png",
        status: "Completed",
        link: "https://github.com/nicantmac",
        desc: "CNN model classifies 700+ images across multiple flower species. " +
            "The project involved data preprocessing, augmentation, and deep learning model " +
            "optimization to achieve high classification accuracy. Built using TensorFlow/Keras " +
            "and Python, this project demonstrates skills in computer vision, neural network " +
            "architecture design, and image recognition."
    },
    {
        title: "GhostGuarded",
        image: "",
        status: "In-progress",
        link: "https://github.com/nicantmac",
        desc: "A platform that people can use to add there job application-process details and " +
            "the system predicts and outputs the likeliness of being ghosted by a company. " +
            "If ghosted, the system uses ML model to take corresponding data i.e. situation, company " +
            "details, your info etc to construct a response of what possibly could the reason and " +
            "potential improvements."
    },
    {
        title: "PDFMerger",
        image: "",
        status: "Completed",
        link: "https://github.com/nicantmac",
        desc: "This is a Python-based tool built to quickly combine multiple files into one. " +
            "This tool simply simplifies the transition from individual uploads to a single, scanned " +
            "document, making it an ideal solution for what is desired. Interface designed intuitively " +
            "and friendly to new and experienced users so file uploads are smooth for all."
    },
    {
        title: "ResumeLens",
        image: "/imgs/resume-lens.png",
        status: "In-Progress",
        github: "https://github.com/nicantmac",
        // demo: "https://resumelens.netlify.app",
        tags: ["React", "Next.js", "OpenAI API", "PDF.js", "TypeScript"],
        desc: "An AI Resume Analyzer an optimization tool that analyzes resumes against " +
            "job descriptions. Identifies missing keywords, weak bullet points, and " +
            "ATS compatibility issues. Provides actionable suggestions and before/after " +
            "comparisons using GPT-4. Built after applying to 500+ jobs to help others avoid " +
            "common resume mistakes."
    },
    {
        title: "IoTPort",
        image: "/imgs/iot-hub.png",
        status: "Completed",
        github: "https://github.com/nicantmac",
        // demo: null,
        tags: ["React", "Python", "WebSocket", "Raspberry Pi", "Real-time Data"],
        desc: "My Smart Home dashboard for monitoring Raspberry Pi smart home devices. " +
            "Real-time camera feeds, motion detection logs, and object detection history. " +
            "Extends existing door camera project with web interface. Demonstrates full-stack" +
            " integration of hardware, backend (Python/Flask), and frontend (React)."
    },
    {
        title: "SalaryLens",
        image: "/imgs/salary-lens.png",
        status: "In-progress",
        github: "https://github.com/nicantmac",
        // demo: null, // Add when deployed
        tags: ["React", "TypeScript", "Recharts", "API Integration", "Data Visualization"],
        desc: "Tech salary research platform aggregating compensation data from public sources. " +
            "Filter by role, location, experience level, and company size. Visualize salary ranges " +
            "with interactive charts and compare multiple offers side-by-side. Built to solve the " +
            "pain of researching 100+ salary ranges during job search."
    },
    {
        title: "APIPlayground: REST API Testing Tool",
        image: "/imgs/api-playground.png",
        status: "In-progress",
        github: "https://github.com/nicantmac",
        // demo: null, // Add when deployed
        tags: ["React", "TypeScript", "Monaco Editor", "Supabase", "REST APIs"],
        desc: "Web-based API testing tool for developers. Test REST endpoints, save request " +
            "collections, manage environment variables, and export requests as code (fetch, axios," +
            " curl). Features JSON/XML response formatting and syntax highlighting. Lightweight " +
            "alternative to Postman for quick API testing."
    },
];

export default cardData;