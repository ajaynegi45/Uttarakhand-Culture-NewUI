"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContributorsPage() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-NewUI/contributors"
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContributors();
  }, []);

  return (
    <>
      <div style={styles.pageHeader}>
        <h1>🤝 GitHub Contributors</h1>
        <p className="text-dark-600 text-lg mt-5">
              Thanks to our {contributors.length} amazing contributors 
            </p>
      </div>

      <div style={styles.contentWrapper}>
        {loading ? (
          <div style={styles.loaderContainer}>
            <Loader2 className="animate-spin" size={48} />
          </div>
        ) : (
          contributors.map((contributor) => (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contributorLink}
            >
              <div style={styles.contributorCard}>
                <div style={styles.contributorInfo}>
                  <img
                    src={contributor.avatar_url}
                    alt={`${contributor.login}'s avatar`}
                    width={50}
                    height={50}
                    style={styles.avatar}
                  />
                  <span style={styles.contributorName}>
                    {contributor.login}
                  </span>
                </div>
                <span style={styles.contributionCount}>
                  {contributor.contributions} contributions
                </span>
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
}

const styles = {
  pageHeader: {
    textAlign: "center",
    marginTop: "20px",
    color: "#1a202c",
  },
  contentWrapper: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
  },
  contributorLink: {
    textDecoration: "none",
  },
  contributorCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    width: "50rem"
  },
  contributorInfo: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    borderRadius: "50%",
    marginRight: "12px",
  },
  contributorName: {
    fontWeight: "bold",
    color: "#1a202c",
  },
  contributionCount: {
    color: "#16a34a",
    fontWeight: "bold",
  },
};
