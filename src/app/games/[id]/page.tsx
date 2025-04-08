import { games } from "@/data/games";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return notFound();

  return (
    <div className="relative min-h-screen text-textBase">
      <Image
        src={game.cover}
        alt={`${game.name} Cover`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 py-12 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
          {game.name}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {game.services.map((service, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-glow">{service}</h3>
              <p className="text-sm mt-2 text-textBase/80">
                Boost your rank fast with our professional {service.toLowerCase()} service.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return games.map((game) => ({ id: game.id }));
}