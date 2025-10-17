import NavBar from "../../ui/navBarTop"
// Import your logo images
import fastApiLogo from "../../assets/images/fastapi.jpg"
import nextjs from "../../assets/images/nextjs.png"
import { useState } from "react"

export default function Projects(){
    const [selectedProject, setSelectedProject] = useState<'freelance' | 'stockmuze' | 'ml' | 'reporting'> ('freelance');

    return (
        <div className="w-screen -ml-37 -mb-30 h-screen overflow-hidden">
            <NavBar/>
            <div className="pt-8 flex min-h-screen w-full overflow-y-auto px-6">
                <div className="w-1/4 rounded-r-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-3 shadow-xl  backdrop-blur-sm">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 Bookman tracking-wide">
                            Skills Learned
                        </h2>
                        <div className="space-y-4">
                            <div className="pl-4">
                                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Python & Data Engineering</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Extensive data cleaning and manipulation of gigabyte-sized CRISPR datasets. 
                                    Built automated pipelines at Tuttle Publishing reducing processing time by 4+ hours.
                                </p>
                            </div>

                            <div className="pl-4">
                                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">TypeScript & Next.js</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Developed FreelanceFlow SaaS platform with real-time database functionality, 
                                    secure authentication, and automated PDF generation.
                                </p>
                            </div>

                            <div className="pl-4">
                                <h3 className="text-lg font-semibold text-gray-900">React & Streamlit</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Built Stock Muze real-time financial dashboard with dynamic visualization 
                                    and news sentiment analysis using external APIs.
                                </p>
                            </div>

                            <div className="pl-4">
                                <h3 className="text-lg font-semibold text-gray-900">Machine Learning</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Implemented multiple ML models for cancer vulnerability identification. 
                                    Logistic softmax regression achieved best fit for CRISPR KO gene dependency data.
                                </p>
                            </div>

                            <div className="pl-4">
                                <div className="flex items-center space-x-3 mb-2">
                                    <img 
                                        src={fastApiLogo} 
                                        alt="FastAPI Logo"
                                        className="w-6 h-6 object-contain rounded"
                                    />
                                    <img
                                        src={nextjs}
                                        alt="nextjs logo"
                                        className="w-6 h-6 object-contain rounded"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900">Database & APIs</h3>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Backend integrations with FastApi and Supabase, Stripe payments integrations.
                                    Automated SFTP data collection with SQL Server database management & storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 bg-gradient-to-br from-white to-gray-50 p-8 rounded-l-2xl">
                    <div className="space-y-3">
                       <div className="flex flex-row justify-evenly">

                       </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
