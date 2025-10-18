import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function TripsPage() {
    const session = await auth();
    if (!session) {
        return <div className="container mx-auto px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold mb-4">Please sign in to view your trips.</h1>
        </div>
    }
    return <div className="space-y-6 container mx-auto px-4 py-8">
        <div className="">
            <h1>Dashboard</h1>
            <Link href="/trips/new">
                <Button>New Trip</Button>
            </Link>
        </div>
    </div>
}