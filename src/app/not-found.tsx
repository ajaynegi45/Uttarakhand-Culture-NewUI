import Link from 'next/link';

const Custom404 = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            color: '#000000',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '40px',
            boxSizing: 'border-box',
            border: '2px solid rgba(0, 0, 0, 0.2)', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px', 
            backdropFilter: 'blur(10px)', 
            width: '90%',
            maxWidth: '900px',
            margin: '0 auto', 
        }}>
            <h1 style={{
                fontSize: '72px',
                fontWeight: 'bold',
                marginBottom: '20px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}>
                404
            </h1>
            <h2 style={{
                fontSize: '36px',
                marginBottom: '10px',
                color: '#333333',
            }}>
                Page Under Construction
            </h2>
            <p style={{
                fontSize: '18px',
                marginBottom: '30px',
                maxWidth: '600px',
                lineHeight: '1.5',
                color: '#555555',
            }}>
                Sorry, this page is currently under construction. We’re working hard to get it ready for you.
            </p>
            <Link href="/" style={{
                padding: '10px 20px',
                backgroundColor: '#000000',
                color: '#ffffff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}>
                Go back to Home
            </Link>
            <p style={{
                marginTop: '20px',
                color: '#777777',
                fontSize: '14px',
            }}>
                Or you can try searching for what you need.
            </p>
        </div>
    );
};

export default Custom404;
