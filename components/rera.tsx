export default function Rera() {
  return (
    <section className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">RERA Registration</h3>
          <p className="text-sm text-muted-foreground mb-4">MahaRERA Registration Number: P51700012345</p>
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
