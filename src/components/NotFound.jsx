import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

const NotFound = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles
        const particleCount = window.innerWidth < 768 ? 30 : 50;
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 20 + 's',
                animationDuration: (15 + Math.random() * 10) + 's'
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="not-found-container relative w-full h-full flex items-center justify-center">
            <Helmet>
                <title>404 - Page Not Found | Dinesh Poudel</title>
                <meta name="description" content="The page you're looking for doesn't exist. Return to Dinesh Poudel's portfolio homepage." />
            </Helmet>

            {/* Animated particles background */}
            <div className="particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.animationDelay,
                            animationDuration: p.animationDuration
                        }}
                    />
                ))}
            </div>

            {/* Glowing effect */}
            <div className="glow"></div>

            {/* Main content */}
            <div className="content-wrapper">
                <div className="error-code">404</div>
                <h1 className="not-found-title">Oops! Page Not Found</h1>
                <p className="not-found-desc">The page you're looking for seems to have wandered off into the digital void. Let's get you back on track!</p>

                <div className="button-group">
                    <Link to="/" className="nf-btn nf-btn-primary">
                        Back to Home
                    </Link>
                    <Link to="/Showcase" className="nf-btn nf-btn-secondary">
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
