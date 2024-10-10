import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>This Is Dashboard Page</h1>
            <hr/>
            &bull; <Link href="dashboard/users/JasonChrisyanto/2327250027">Jason Chrisyanto</Link>
            &bull; <Link href="dashboard/users/Nelson/2327250002">Nelson</Link>
        </div>
    )
}