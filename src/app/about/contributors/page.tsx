// app/contributors/page.tsx
import styles from './page.module.css';
import { fetchGitHub } from '@/utils/github';
import Image from 'next/image';
import Link from 'next/link';

function getTimeAgo(date: string): string {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins} minutes ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 48) return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
    return `${Math.floor(hrs / 24)} days ago`;
}

export default async function ContributorsPage() {
    const [contributors, stargazers, forks, commits] = await Promise.all([
        fetchGitHub('/repos/ajaynegi45/Uttarakhand-Culture-NewUI/contributors'),
        fetchGitHub('/repos/ajaynegi45/Uttarakhand-Culture-NewUI/stargazers'),
        fetchGitHub('/repos/ajaynegi45/Uttarakhand-Culture-NewUI/forks'),
        fetchGitHub('/repos/ajaynegi45/Uttarakhand-Culture-NewUI/commits'),
    ]);

    return (
        <section className={styles.container}>
            <header className={styles.heading}>
                <h1>Uttarakhand Culture Preservation Project</h1>
                <p>
                    Bridging the generational gap by preserving the sacred traditions and rituals of Uttarakhand.
                </p>
            </header>

            <div className={styles.section}>
                <h2>Contributors</h2>
                <div className={styles.grid}>
                    {contributors.map((user: any) => (
                        <Link key={user.id} href={ "https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI/commits?author="+user.login} className={styles.card}>
                            <Image src={user.avatar_url} alt={user.login} width={60} height={60} className={styles.avatar} />
                            <p className={styles.username} >{user.login}</p>
                            <p>{user.contributions} Contributions</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/*<div className={styles.section}>*/}
            {/*    <h2>Forked Users</h2>*/}
            {/*    <div className={styles.grid}>*/}
            {/*        {forks.map((fork: any) => (*/}
            {/*            <Link key={fork.id} href={fork.owner.html_url} className={styles.card}>*/}
            {/*                <Image src={fork.owner.avatar_url} alt={fork.owner.login} width={60} height={60} className={styles.avatar} />*/}
            {/*                <p className={styles.username}  >{fork.owner.login}</p>*/}
            {/*            </Link>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className={styles.section}>*/}
            {/*    <h2>Stargazers</h2>*/}
            {/*    <div className={styles.grid}>*/}
            {/*        {stargazers.map((star: any) => (*/}
            {/*            <Link key={star.id} href={star.html_url} className={styles.card}>*/}
            {/*                <Image src={star.avatar_url} alt={star.login} width={60} height={60} className={styles.avatar} />*/}
            {/*                <p className={styles.username} >{star.login}</p>*/}
            {/*            </Link>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={styles.section}>
                <h2>Recent Commits</h2>
                <div className={styles.grid}>
                    {commits.slice(0, 10).map((commit: any) => (
                        <Link key={commit.sha} href={commit.html_url} className={styles.commitCard}>
                            <Image src={commit.author?.avatar_url} alt={commit.author?.login} width={40} height={40} className={styles.avatar} />
                            <div className={styles.commitCardDetails}>
                                <p><strong>{commit.commit.author.name}</strong></p>
                                <p className={styles.message}>{commit.commit.message}</p>
                                <p className={styles.time}>{getTimeAgo(commit.commit.author.date)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
