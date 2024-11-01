'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../ui/Contributor.css'


interface Contributor {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
    type: string;
    mode: string;
}

interface RepoStats {
    stars: number;
    forks: number;
    openIssues: number;
}

const ContributorCard: React.FC<Contributor> = ({
    login,
    avatar_url,
    html_url,
    contributions,
    type,
    mode,
}) => (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`profile-card-container ${mode === 'dark' ? 'profile-card-container-dark' : 'profile-card-container-light'}`}
        data-aos="fade-up"
        data-aos-duration='1500'
    >
        <div className='profile-card-content'>
            <img
                src={avatar_url}
                alt={login}
                className={`profile-card-avatar ${mode === 'dark' ? 'profile-card-avatar-dark' : 'profile-card-avatar-light'}`}
            />
            <h3 className={`profile-card-title ${mode === 'dark' ? 'profile-card-title-dark' : 'profile-card-title-light'}`}>
                {login}
            </h3>
            <p className={`profile-card-type ${mode === 'dark' ? 'profile-card-type-dark' : 'profile-card-type-light'} mb-2`}>
                {type}
            </p>
            <div className={`profile-card-contributions ${mode === 'dark' ? 'profile-card-contributions-dark' : 'profile-card-contributions-light'}`} onClick={() => window.open('https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI/graphs/contributors', '_blank')}
            >
                <span className={`profile-card-contributions-text ${mode === 'dark' ? 'profile-card-contributions-text-dark' : 'profile-card-contributions-text-light'}`}>
                    {contributions} contributions
                </span>
            </div>
        </div>
        <div className={`profile-card-footer ${mode === 'dark' ? 'profile-card-footer-dark' : 'profile-card-footer-light'}`}>
            <a
                href={html_url}
                target='_blank'
                rel='noopener noreferrer'
                className={`profile-card-profile-link ${mode === 'dark' ? 'profile-card-profile-link-dark' : 'profile-card-profile-link-light'}`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
                View Profile
            </a>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='profile-card-github-icon'
            >
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
        </div>
    </motion.div>
);

interface StatCardProps {
    label: string;
    value: number;
    icon: React.ReactNode;
    mode: string;
    onclick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, mode, onclick }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`stat-card-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}
        aria-label={`${label} stat card`}
        onClick={onclick}
    >
        <div className={`stat-card-icon-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            {icon}
        </div>
        <div>
            <h3 className={`stat-card-value ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                {value}
            </h3>
            <p className={`stat-card-label ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                {label}
            </p>
        </div>
    </motion.div>
);

interface Issue {
    title: string;
    number: number;
    html_url: string;
    user: {
        login: string;
        avatar_url: string;
    };
    state: string;
    created_at: string;
    comments: number;
    mode: string; // Assuming you have a light/dark mode
}

const IssueCard: React.FC<Issue> = ({
    title,
    number,
    html_url,
    user,
    state,
    created_at,
    comments,
    mode,
}) => (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`issue-card-container ${mode === 'dark' ? 'issue-card-container-dark' : 'issue-card-container-light'}`}
        data-aos="fade-up"
        data-aos-duration="1500"
    >
        <div className="issue-card-content">
            <img
                src={user.avatar_url}
                alt={user.login}
                className={`issue-card-avatar ${mode === 'dark' ? 'issue-card-avatar-dark' : 'issue-card-avatar-light'}`}
            />
            <h3 className={`issue-card-title ${mode === 'dark' ? 'issue-card-title-dark' : 'issue-card-title-light'}`}>
                #{number} - {title}
            </h3>
            <p className={`issue-card-state ${mode === 'dark' ? 'issue-card-state-dark' : 'issue-card-state-light'}`}>
                Status: {state}
            </p>
        </div>

        {/* Footer Row with "Created by" and Date */}
        <div className="issue-card-footer-row">
            <p className={`issue-card-user ${mode === 'dark' ? 'issue-card-user-dark' : 'issue-card-user-light'}`}>
                Created by: {user.login}
            </p>
            <p className={`issue-card-date ${mode === 'dark' ? 'issue-card-date-dark' : 'issue-card-date-light'}`}>
                Created at: {new Date(created_at).toLocaleDateString()}
            </p>
        </div>

        <div className={`issue-card-footer ${mode === 'dark' ? 'issue-card-footer-dark' : 'issue-card-footer-light'}`}>
            <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`issue-card-link ${mode === 'dark' ? 'issue-card-link-dark' : 'issue-card-link-light'}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                View Issue
            </a>
            <span className="issue-card-comments-count">
                {comments} Comments
            </span>
        </div>
    </motion.div>

);


export default function ContributorPage() {
    const [contributors, setContributors] = useState<Contributor[]>([]);
    const [openIssues, setOpenIssues] = useState<Issue[]>([]);
    const [isContributorPage, setisContributorPage] = useState(true);
    const [repoStats, setRepoStats] = useState<RepoStats>({
        stars: 0,
        forks: 0,
        openIssues: 0,
    });
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const contributorsPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let allContributors: Contributor[] = [];
                const contributorsResponse = await fetch("https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-NewUI/contributors?page=1&per_page=100")
                if (!contributorsResponse.ok) {
                    throw new Error('Failed to fetch contributors data');
                }
                const contributorsData: Contributor[] =
                    await contributorsResponse.json();

                allContributors = [...allContributors, ...contributorsData];

                setContributors(allContributors);
                console.log(allContributors)

                const repoResponse = await fetch(
                    'https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-NewUI')
                const repoData = await repoResponse.json();


                setRepoStats({
                    stars: repoData.stargazers_count,
                    forks: repoData.forks_count,
                    openIssues: repoData.open_issues_count,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }


            const issue = await fetch('https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-NewUI/issues');
            const openIssueData: Issue[] = await issue.json();

            // Filter the issues where the state is 'open', explicitly typing the 'issue' parameter
            const opened = openIssueData.filter((issue: Issue) => issue.state === 'open');
            setOpenIssues(opened)
            console.log(opened);
        };

        fetchData();
    }, []);

    const indexOfLastContributor = currentPage * contributorsPerPage;
    const indexOfFirstContributor = indexOfLastContributor - contributorsPerPage;
    const currentContributors = contributors.slice(
        indexOfFirstContributor,
        indexOfLastContributor,
    );

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(contributors.length / contributorsPerPage);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        setEmail('');
    };

    const scrollToNextSection = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const [mode, setMode] = useState('light');

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <div className={`page-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>

            {/* Hero Section */}
            <section className={`hero-section ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <div className="theme-btn">
                    <div className="my-body">
                        <div className="darkThemeBtn flex justify-content-center">
                            <input
                                id="darkmode-toggle"
                                type="checkbox"
                                checked={mode === "dark"}
                                onChange={toggleMode}
                                style={{ opacity: 0 }}
                            />
                            <label htmlFor="darkmode-toggle">
                                {mode === "dark" ? (
                                    <span style={{ fontSize: "1.5rem", color: "yellow" }}>☀️</span> // Sun Icon
                                ) : (
                                    <span style={{ fontSize: "1.5rem", color: "gray" }}>🌙</span> // Moon Icon
                                )}
                            </label>
                            <span className="fake-body"></span>
                        </div>
                    </div>
                </div>
                <div className={`hero-overlay ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`} />
                <div className="hero-content">
                    <motion.h1
                        className={`hero-heading ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Amazing Contributors
                    </motion.h1>
                    <motion.p
                        className={`hero-subheading ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Shaping the future of Uttarakhand-Culture, one commit at a time
                    </motion.p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className={`stats-section ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <div className="stats-container">
                    <h2 className={`stats-heading ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                        Project Statistics
                    </h2>
                    <div className="stats-grid">
                        <StatCard
                            mode={mode}
                            label="Contributors"
                            value={contributors.length}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                            }
                            onclick={() => setisContributorPage(true)}
                        />
                        <StatCard
                            mode={mode}
                            label="Stars"
                            value={repoStats.stars}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-primary"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    style={{ width: '2rem', height: '2rem' }}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                                </svg>
                            }
                        />
                        <StatCard
                            mode={mode}
                            label="Forks"
                            value={repoStats.forks}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            }
                        />
                        <StatCard
                            mode={mode}
                            label="Open Issues"
                            value={repoStats.openIssues}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>

                            }

                            onclick={() => setisContributorPage(false)}
                        />
                    </div>
                </div>
            </section>

            {/* Contributors Section */}
            <section className="contributors-section">
                <div className="stats-container">
                    <h2 className={`contributors-heading ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                        {isContributorPage ? 'Meet Our Contributors' : 'Your contribution is valuable see all Issues'}
                    </h2>
                    {loading ? (
                        <p className="text-center text-white">Loading...</p>
                    ) : (
                        isContributorPage ?

                            <div className="contributors-grid">
                                {currentContributors.map((contributor) => (
                                    <ContributorCard key={contributor.id} {...contributor} mode={mode} />
                                ))}
                            </div> :
                            <div className="contributors-grid">
                                {openIssues.map((issue) => (
                                    // <ContributorCard key={contributor.id} {...contributor} mode={mode} />
                                    <IssueCard key={issue.number} {...issue} mode={mode} />
                                ))}
                            </div>

                    )}

                    <div className="pagination-container">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`pagination-button ${currentPage === index + 1 ? 'active' : 'inactive'}`}
                                aria-current={currentPage === index + 1 ? 'page' : undefined}
                                aria-label={`Go to page ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
