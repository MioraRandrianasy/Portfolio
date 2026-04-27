import { Card, CardContent } from "@/components/ui/card";

export default function Research() {
    return (
        <Card>
            <CardContent>
                <h2 className="text-3xl font-display font-semibold mb-4 text-white">Research</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Investigating radio properties and star formation activity of galaxies
                    within the cosmic web using VLA-COSMOS data.
                </p>
            </CardContent>
        </Card>
    );
}