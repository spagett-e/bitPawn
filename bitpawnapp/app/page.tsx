import { Card } from "@/components/ui/card";

export default function BentoPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
        <Card className="h-64 md:h-80 p-6 bg-muted/50 hover:bg-muted transition-colors">
          <div className="flex flex-col h-full justify-between">
            <h2 className="text-2xl font-bold">Featured Content</h2>
            <p className="text-muted-foreground">Discover our latest updates</p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <Card className="h-64 md:h-80 p-6 bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex flex-col h-full justify-between">
              <h3 className="font-semibold">Statistics</h3>
              <p className="text-4xl font-bold">42%</p>
            </div>
          </Card>

          <Card className="h-64 md:h-80 p-6 bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex flex-col h-full justify-between">
              <h3 className="font-semibold">Updates</h3>
              <p className="text-muted-foreground">3 new notifications</p>
            </div>
          </Card>

          <Card className="col-span-2 h-32 md:h-40 p-6 bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center justify-between h-full">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
                  Start
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}