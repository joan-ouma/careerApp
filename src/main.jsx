import React, { useState } from 'react';
import { GraduationCap, Compass, BookOpen, TrendingUp, Award, Menu, X, User, LogOut, BarChart3, Target, Sparkles } from 'lucide-react';

const CareerPilotApp = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Landing Page Component
    const LandingPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Compass className="w-8 h-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-gray-900">CareerPilot</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
                            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">How It Works</a>
                            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <button
                                onClick={() => setCurrentPage('login')}
                                className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setCurrentPage('register')}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
                            >
                                Get Started
                            </button>
                        </div>
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#features" className="block text-gray-700">Features</a>
                            <a href="#how-it-works" className="block text-gray-700">How It Works</a>
                            <a href="#about" className="block text-gray-700">About</a>
                            <button onClick={() => setCurrentPage('login')} className="block w-full text-left text-indigo-600">Login</button>
                            <button onClick={() => setCurrentPage('register')} className="block w-full text-left bg-indigo-600 text-white px-4 py-2 rounded-lg">Get Started</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Discover Your Perfect
                        <span className="text-indigo-600"> Career Path</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Take our comprehensive evaluation tests and get personalized course recommendations tailored just for you. Start your journey to the right university program today.
                    </p>
                    <button
                        onClick={() => setCurrentPage('register')}
                        className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Start Your Assessment
                    </button>
                </div>

                {/* Features Grid */}
                <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Personalized Assessments</h3>
                        <p className="text-gray-600">Take scientifically designed tests that evaluate your interests, skills, and personality to find your perfect match.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <BookOpen className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Course Recommendations</h3>
                        <p className="text-gray-600">Get detailed information about courses that align with your strengths and career aspirations.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Career Insights</h3>
                        <p className="text-gray-600">Explore career paths, salary expectations, and job market trends for your chosen field.</p>
                    </div>
                </div>

                {/* How It Works */}
                <div id="how-it-works" className="mt-24">
                    <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Create Account', desc: 'Sign up in seconds' },
                            { step: '2', title: 'Take Tests', desc: 'Complete evaluations' },
                            { step: '3', title: 'Get Results', desc: 'View recommendations' },
                            { step: '4', title: 'Choose Course', desc: 'Make informed decision' }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Compass className="w-6 h-6" />
                        <span className="text-xl font-bold">CareerPilot</span>
                    </div>
                    <p className="text-gray-400">Helping students find their perfect career path</p>
                </div>
            </footer>
        </div>
    );

    // Login Page
    const LoginPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <div className="text-center mb-8">
                    <Compass className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-600 mt-2">Login to continue your journey</p>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsAuthenticated(true);
                    setUser({ name: 'John Doe', email: 'john@example.com' });
                    setCurrentPage('dashboard');
                }}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input type="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="••••••••" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{' '}
                    <button onClick={() => setCurrentPage('register')} className="text-indigo-600 font-medium hover:underline">
                        Sign up
                    </button>
                </p>
                <button onClick={() => setCurrentPage('landing')} className="text-gray-500 text-sm mt-4 hover:text-gray-700">
                    ← Back to home
                </button>
            </div>
        </div>
    );

    // Register Page
    const RegisterPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <div className="text-center mb-8">
                    <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Join CareerPilot</h2>
                    <p className="text-gray-600 mt-2">Start your career discovery journey</p>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsAuthenticated(true);
                    setUser({ name: 'John Doe', email: 'john@example.com' });
                    setCurrentPage('dashboard');
                }}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input type="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="••••••••" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium">
                            Create Account
                        </button>
                    </div>
                </form>
                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{' '}
                    <button onClick={() => setCurrentPage('login')} className="text-indigo-600 font-medium hover:underline">
                        Login
                    </button>
                </p>
                <button onClick={() => setCurrentPage('landing')} className="text-gray-500 text-sm mt-4 hover:text-gray-700">
                    ← Back to home
                </button>
            </div>
        </div>
    );

    // Dashboard
    const Dashboard = () => (
        <div className="min-h-screen bg-gray-50">
            <DashboardNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
                    <p className="text-gray-600 mt-2">Continue your career discovery journey</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Tests Completed</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">3/5</p>
                            </div>
                            <BarChart3 className="w-10 h-10 text-indigo-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Recommendations</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                            </div>
                            <Sparkles className="w-10 h-10 text-purple-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Match Score</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
                            </div>
                            <Target className="w-10 h-10 text-green-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Saved Courses</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">7</p>
                            </div>
                            <BookOpen className="w-10 h-10 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Continue Assessment</h3>
                        <p className="mb-6 text-indigo-100">You have 2 tests remaining</p>
                        <button
                            onClick={() => setCurrentPage('assessment')}
                            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
                        >
                            Resume Tests
                        </button>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-xl text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Explore Courses</h3>
                        <p className="mb-6 text-blue-100">Browse recommended programs</p>
                        <button
                            onClick={() => setCurrentPage('courses')}
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                        >
                            View Courses
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Assessment Page
    const AssessmentPage = () => {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const questions = [
            { q: "I enjoy solving complex mathematical problems", type: "Analytical" },
            { q: "I prefer working with people rather than data", type: "Social" },
            { q: "I like creating and designing new things", type: "Creative" },
            { q: "I am organized and detail-oriented", type: "Methodical" },
            { q: "I enjoy leading group projects and teams", type: "Leadership" }
        ];

        return (
            <div className="min-h-screen bg-gray-50">
                <DashboardNav />
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-900">Career Assessment</h2>
                                <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-6">{questions[currentQuestion].q}</h3>
                            <div className="space-y-3">
                                {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (currentQuestion < questions.length - 1) {
                                                setCurrentQuestion(currentQuestion + 1);
                                            } else {
                                                setCurrentPage('results');
                                            }
                                        }}
                                        className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                                className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                                disabled={currentQuestion === 0}
                            >
                                Previous
                            </button>
                            <button onClick={() => setCurrentPage('dashboard')} className="px-6 py-2 text-gray-600 hover:text-gray-900">
                                Save & Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Results Page
    const ResultsPage = () => (
        <div className="min-h-screen bg-gray-50">
            <DashboardNav />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <Award className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Results Are Ready!</h1>
                    <p className="text-xl text-gray-600">Based on your responses, here are your top career matches</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        { title: 'Computer Science', match: '95%', color: 'indigo' },
                        { title: 'Engineering', match: '88%', color: 'blue' },
                        { title: 'Data Science', match: '82%', color: 'purple' }
                    ].map((course, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-indigo-500 transition">
                            <div className={`text-${course.color}-600 text-5xl font-bold mb-2`}>{course.match}</div>
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">Excellent match based on your skills and interests</p>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6">Your Strengths</h2>
                    <div className="space-y-4">
                        {[
                            { skill: 'Analytical Thinking', score: 92 },
                            { skill: 'Problem Solving', score: 88 },
                            { skill: 'Technical Skills', score: 85 },
                            { skill: 'Creativity', score: 78 }
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{item.skill}</span>
                                    <span className="text-indigo-600 font-semibold">{item.score}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${item.score}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    // Courses Page
    const CoursesPage = () => (
        <div className="min-h-screen bg-gray-50">
            <DashboardNav />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Recommended Courses</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: 'Computer Science', university: 'MIT', duration: '4 years', match: 95 },
                        { name: 'Software Engineering', university: 'Stanford', duration: '4 years', match: 92 },
                        { name: 'Data Science', university: 'Berkeley', duration: '4 years', match: 88 },
                        { name: 'Information Systems', university: 'CMU', duration: '4 years', match: 85 },
                        { name: 'Artificial Intelligence', university: 'Oxford', duration: '3 years', match: 83 },
                        { name: 'Cybersecurity', university: 'Cambridge', duration: '4 years', match: 80 }
                    ].map((course, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <div className="flex items-center justify-between mb-4">
                                <GraduationCap className="w-8 h-8 text-indigo-600" />
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{course.match}% Match</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                            <p className="text-gray-600 mb-4">{course.university}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <span>Duration: {course.duration}</span>
                            </div>
                            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // Dashboard Navigation Component
    const DashboardNav = () => (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Compass className="w-8 h-8 text-indigo-600" />
                        <span className="text-xl font-bold text-gray-900">CareerPilot</span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-indigo-600 transition">Dashboard</button>
                        <button onClick={() => setCurrentPage('assessment')} className="text-gray-700 hover:text-indigo-600 transition">Assessments</button>
                        <button onClick={() => setCurrentPage('courses')} className="text-gray-700 hover:text-indigo-600 transition">Courses</button>
                        <button onClick={() => setCurrentPage('results')} className="text-gray-700 hover:text-indigo-600 transition">Results</button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <User className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={() => {
                                setIsAuthenticated(false);
                                setUser(null);
                                setCurrentPage('landing');
                            }}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <LogOut className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );

    // Main Render
    return (
        <div>
            {currentPage === 'landing' && <LandingPage />}
            {currentPage === 'login' && <LoginPage />}
            {currentPage === 'register' && <RegisterPage />}
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'assessment' && <AssessmentPage />}
            {currentPage === 'results' && <ResultsPage />}
            {currentPage === 'courses' && <CoursesPage />}
        </div>
    );
};

export default CareerPilotApp;