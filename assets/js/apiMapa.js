// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: { lat: -23.5479585, lng: -46.6050114 },
        });
  // The marker, positioned at Uluru
  const marker1 = new google.maps.Marker({ position: { lat: -23.5965994, lng: -46.7529815 }, map: map, title: "Ecoponto Jardim Maria do Carmo" });
  const marker2 = new google.maps.Marker({ position: { lat: -23.4862880, lng: -46.6951634 }, map: map, title: "Ecoponto Bandeirantes" });
  const marker3 = new google.maps.Marker({ position: { lat: -23.5691189, lng: -46.3749025 }, map: map, title: "Ecoponto Tereza Cristina" });
  const marker4 = new google.maps.Marker({ position: { lat: -23.5045774, lng: -46.3749025 }, map: map, title: "Ecoponto Itaim Paulista" });
  const marker5 = new google.maps.Marker({ position: { lat: -23.5477054, lng: -46.6527311 }, map: map, title: "Ecoponto Corinthians" });
  const marker6 = new google.maps.Marker({ position: { lat: -23.6537048, lng: -46.7442295 }, map: map, title: "Ecoponto Jabaquara" });
  const marker7 = new google.maps.Marker({ position: { lat: -23.5164776, lng: -46.6951634 }, map: map, title: "Ecoponto Vila Jaragua" });
  const marker8 = new google.maps.Marker({ position: { lat: -23.5299145, lng: -46.5852123 }, map: map, title: "Ecoponto Tatuapé" });
  const marker9 = new google.maps.Marker({ position: { lat: -23.5570721, lng: -46.7127192 }, map: map, title: "Ecoponto Bras" });
  const marker10 = new google.maps.Marker({ position: { lat: -23.6250818, lng: -46.7195716 }, map: map, title: "Ecoponto Berrini" });
  const marker11 = new google.maps.Marker({ position: { lat: -23.5479585, lng: -46.6050114 }, map: map, title: "Ecoponto Mooca" });
  const marker12 = new google.maps.Marker({ position: { lat: -23.5570721, lng: -46.7127192 }, map: map, title: "Ecoponto Alto de Pinheiros" });
  const marker13 = new google.maps.Marker({ position: { lat: -23.4672646, lng: -46.6121335 }, map: map, title: "Ecoponto Tucuruvi" });
  const marker14 = new google.maps.Marker({ position: { lat: -23.5565917, lng: -46.6392435 }, map: map, title: "Ecoponto Liberdade" });
  const marker15 = new google.maps.Marker({ position: { lat: -23.5271629, lng: -46.6507547 }, map: map, title: "Ecoponto Barrafunda" });
  const marker16 = new google.maps.Marker({ position: { lat: -23.5788379, lng: -46.4887849 }, map: map, title: "Ecoponto Parque do Carmo" });
  const marker17 = new google.maps.Marker({ position: { lat: -23.5065051, lng: -46.4644517 }, map: map, title: "Ecoponto Pedro Nunes" });
  const marker18 = new google.maps.Marker({ position: { lat: -23.560971, lng: -46.7932717 }, map: map, title: "Ecoponto Jaguaribe" });
  const marker19 = new google.maps.Marker({ position: { lat: -23.5124808, lng: -46.8661529 }, map: map, title: "Ecoponto Barueri" });
  const marker20 = new google.maps.Marker({ position: { lat: -23.5691126, lng: -46.8318754 }, map: map, title: "Ecoponto Aldeia" });
}

window.initMap = initMap;

