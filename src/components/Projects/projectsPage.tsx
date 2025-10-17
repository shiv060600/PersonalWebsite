import NavBar from "../../ui/navBarTop"
// Import your logo images
import nextjs from "../../assets/images/nextjs.png"
import pythonLogo from "../../assets/images/python.png"
import postgresLogo from "../../assets/images/postgres.jpeg"
import supabaseLogo from "../../assets/images/supabase.png"
import mssqlLogo from "../../assets/images/mssqlserver.webp"
import airflow from "../../assets/images/airflow.png"
import typescript from "../../assets/images/typescript.png"
import { useState } from "react"
import ProjectButton from "../../ui/projectButton"

export default function Projects(){
    const [selectedProject, setSelectedProject] = useState<'freelance' | 'stockmuze' | 'ml' | 'reporting'> ('freelance');

    // Project data with comprehensive information
    const projectData = {
        freelance: {
            title: "FreelanceFlow SaaS",
            description: "A comprehensive freelance invoice management SaaS platform featuring real-time database functionality, secure authentication, automated PDF generation, and subscription-based billing.",
            longDescription: "Developed a comprehensive freelance invoice management SaaS platform using TypeScript, Next.js, and React Native. Featuring real-time database functionality, secure authentication, automated PDF invoice generation, contract PDF generation, client relationship management, and subscription-based billing with Stripe integration.",
            techStack: [
                { name: "TypeScript", logo: nextjs, color: "blue" },
                { name: "Next.js", logo: nextjs, color: "green" },
                { name: "React Native", logo: nextjs, color: "purple" },
                { name: "Supabase", logo: supabaseLogo, color: "green" },
                { name: "Stripe", logo: nextjs, color: "purple" }
            ],
            features: [
                "Real-time database functionality",
                "Secure authentication system",
                "Automated PDF invoice generation",
                "Contract PDF generation",
                "Client relationship management",
                "Subscription-based billing with Stripe"
            ],
            impact: "Streamlined freelance business operations with automated invoicing and client management"
        },
        stockmuze: {
            title: "Stock Muze Dashboard",
            description: "Real-time financial dashboard with dynamic visualization and news sentiment analysis using external APIs and SQLite databases.",
            longDescription: "Developed and deployed a real-time financial dashboard leveraging Streamlit, Python, and external APIs to dynamically visualize stock data and news sentiment. Implemented data storage and retrieval using SQLite databases, enabling both API-driven and database functionalities for improved application flexibility.",
            techStack: [
                { name: "Python", logo: pythonLogo, color: "yellow" },
                { name: "Streamlit", logo: nextjs, color: "red" },
                { name: "SQLite", logo: postgresLogo, color: "blue" },
                { name: "External APIs", logo: nextjs, color: "green" }
            ],
            features: [
                "Real-time stock data visualization",
                "News sentiment analysis",
                "Dynamic data visualization",
                "SQLite database integration",
                "API-driven functionality",
                "Interactive dashboard interface"
            ],
            impact: "Enabled data-driven investment decisions through real-time market analysis"
        },
        ml: {
            title: "Novel Intrinsic Oncology Targets",
            description: "Machine learning models for cancer vulnerability identification using CRISPR KO gene dependency data and advanced classification algorithms.",
            longDescription: "Extensive data cleaning and manipulation of multiple gigabyte-sized CRISPR Knockout and CCLE-Expression data files using Python and Pandas. Used PyTorch & Scikit-learn to identify cancer vulnerabilities and classified predictive models that share common genetic determinants using CRISPR KO gene dependency data. Given our data, the logistic softmax regression had the best fit.",
            techStack: [
                { name: "Python", logo: pythonLogo, color: "yellow" },
                { name: "PyTorch", logo: nextjs, color: "orange" },
                { name: "Scikit-learn", logo: nextjs, color: "blue" },
                { name: "Pandas", logo: nextjs, color: "green" }
            ],
            features: [
                "CRISPR KO gene dependency analysis",
                "Cancer vulnerability identification",
                "Logistic softmax regression modeling",
                "Large-scale data processing (GB+ files)",
                "Predictive model classification",
                "Genetic determinant analysis"
            ],
            impact: "Advanced cancer research through machine learning-driven genetic analysis"
        },
        reporting: {
            title: "Tuttle Publishing ETL Pipeline",
            description: "Automated ETL pipelines for data processing, reporting, and inventory management using Python, Airflow, and SQL Server.",
            longDescription: "Built & maintained automated ETL pipelines using Python, Airflow, and SQL Server to eliminate old and inaccurate reporting, deliver up-to-date Excel and Power BI reports to sales and finance teams, and enable smarter inventory decisions. Resulted in average revenue gain of $105,000 per month.",
            techStack: [
                { name: "Python", logo: pythonLogo, color: "yellow" },
                { name: "Apache Airflow", logo: nextjs, color: "blue" },
                { name: "SQL Server", logo: mssqlLogo, color: "red" },
                { name: "Power BI", logo: nextjs, color: "purple" }
            ],
            features: [
                "Automated ETL pipeline development",
                "Real-time data processing",
                "Excel and Power BI report generation",
                "Sales and finance team integration",
                "Inventory decision optimization",
                "Revenue tracking and analysis"
            ],
            impact: "Generated $105,000 average monthly revenue gain through improved data processing and reporting"
        }
    };

    return (
        <div className="w-screen -ml-37 -mb-30 h-screen overflow-hidden">
            <NavBar/>
            <div className="pt-8 flex h-screen w-full px-6">
                <div className="w-1/4 rounded-r-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-6 shadow-xl backdrop-blur-sm h-full overflow-y-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 font-serif tracking-wide">
                            Tech Stack
                        </h2>
                        
                        <div className="space-y-6">
                            {/* Python */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={pythonLogo} 
                                    alt="Python Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                    Python
                                </h3>
                            </div>

                            {/* Apache Airflow */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={airflow} 
                                    alt="Apache Airflow Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    Apache Airflow
                                </h3>
                            </div>

                            {/* TypeScript */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={typescript} 
                                    alt="TypeScript Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                                    TypeScript
                                </h3>
                            </div>

                            {/* SQL */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={mssqlLogo} 
                                    alt="SQL Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                    SQL
                                </h3>
                            </div>


                            {/* Next.js */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={nextjs} 
                                    alt="Next.js Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Next.js
                                </h3>
                            </div>

                            {/* React */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={nextjs} 
                                    alt="React Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                    React
                                </h3>
                            </div>

                            {/* Supabase */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={supabaseLogo} 
                                    alt="Supabase Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                    Supabase
                                </h3>
                            </div>

                            

                            {/* SQL Server */}
                            <div className="flex items-center space-x-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    src={mssqlLogo} 
                                    alt="SQL Server Logo"
                                    className="w-10 h-10 object-contain rounded"
                                />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                                    SQL Server
                                </h3>
                            </div>

                            

                        </div>
                    </div>
                </div>
                <div className="w-3/4 bg-gradient-to-br from-white to-gray-50 p-8 rounded-l-2xl flex flex-col">
                    <div className="space-y-8 flex-1 overflow-y-auto">
                        {/* Project Navigation Buttons */}
                       <div className="flex flex-row justify-evenly gap-4">
                            <ProjectButton 
                                colorFrom="blue"
                                colorTo="purple"
                                stateSet="freelance"
                                SetState= {setSelectedProject as (state:string) => void}
                                className="px-6 py-3 rounded-lg font-medium"
                                isSelected={selectedProject === 'freelance'}
                                >
                                FreelanceFlow
                            </ProjectButton>

                            <ProjectButton 
                                colorFrom="green"
                                colorTo="blue"
                                stateSet="stockmuze"
                                SetState= {setSelectedProject as (state:string) => void}
                                className="px-6 py-3 rounded-lg font-medium"
                                isSelected={selectedProject === 'stockmuze'}
                                >
                                Stock Muze
                            </ProjectButton>

                            <ProjectButton 
                                colorFrom="yellow"
                                colorTo="red"
                                stateSet="ml"
                                SetState= {setSelectedProject as (state:string) => void}
                                className="px-6 py-3 rounded-lg font-medium"
                                isSelected={selectedProject === 'ml'}
                                >
                                ML Analysis
                            </ProjectButton>

                            <ProjectButton 
                                colorFrom="purple"
                                colorTo="pink"
                                stateSet="reporting"
                                SetState= {setSelectedProject as (state:string) => void}
                                className="px-6 py-3 rounded-lg font-medium"
                                isSelected={selectedProject === 'reporting'}
                                >
                                Financial Reporting / ETL
                            </ProjectButton>
                       </div>

                       {/* Dynamic Project Content */}
                       <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                            <div className="space-y-6">
                                {/* Project Header */}
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-serif mb-4">
                                        {projectData[selectedProject].title}
                                    </h1>
                                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                        {projectData[selectedProject].description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Tech Stack</h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {projectData[selectedProject].techStack.map((tech, index) => (
                                            <div key={index} className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow">
                                                <img 
                                                    src={tech.logo} 
                                                    alt={`${tech.name} logo`}
                                                    className="w-8 h-8 object-contain rounded"
                                                />
                                                <span className="font-semibold text-gray-800">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Key Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {projectData[selectedProject].features.map((feature, index) => (
                                            <div key={index} className="flex items-start space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Impact</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {projectData[selectedProject].impact}
                                    </p>
                                </div>

                                {/* Detailed Description */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project Details</h3>
                                    <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                                        {projectData[selectedProject].longDescription}
                                    </p>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
