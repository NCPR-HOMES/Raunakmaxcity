export default function Rera() {
  return (
    <section className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">RERA Registration</h3>
          <div className="max-w-lg mx-auto space-y-2 mb-4">
            {[
              ['A4', 'P51700046674'],
              ['B1', 'P51700046534'],
              ['B2', 'P51700046565'],
              ['B3', 'P51700046564'],
              ['B4', 'P51700050829'],
              ['B5', 'P51700050828'],
              ['B6', 'P51700050827'],
            ].map(([tower, number]) => (
              <p key={tower} className="text-sm text-muted-foreground">
                Tower {tower}: <span className="font-medium">{number}</span>
              </p>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            The project is registered with MahaRERA. Details are available on the website{" "}
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://maharera.mahaonline.gov.in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
