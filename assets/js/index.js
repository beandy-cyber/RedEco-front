function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: -23.5479585, lng: -46.6050114 },
  });

  const locations = [
      { lat: -23.6537048, lng: -46.7442295, title: "Ecoponto Jabaquara" },
      { lat: -23.5124808, lng: -46.8661529, title: "Ecoponto Barueri" },
      { lat: -23.5045774, lng: -46.3749025, title: "Ecoponto Itaim Paulista" },
      { lat: -23.560971, lng: -46.7932717, title: "Ecoponto Jaguaribe" },
      { lat: -23.5477054, lng: -46.6527311, title: "Ecoponto Corinthians" },
      { lat: -23.5164776, lng: -46.6951634, title: "Ecoponto Vila Jaragua" },
      { lat: -23.5299145, lng: -46.5852123, title: "Ecoponto Tatuapé" },
      { lat: -23.5570721, lng: -46.7127192, title: "Ecoponto Bras" },
      { lat: -23.6250818, lng: -46.7195716, title: "Ecoponto Berrini" },
      { lat: -23.5479585, lng: -46.6050114, title: "Ecoponto Mooca" },
      { lat: -23.5570721, lng: -46.7127192, title: "Ecoponto Alto de Pinheiros" },
      { lat: -23.4862880, lng: -46.6951634, title: "Ecoponto Bandeirantes" },
      { lat: -23.4672646, lng: -46.6121335, title: "Ecoponto Tucuruvi" },
      { lat: -23.5565917, lng: -46.6392435, title: "Ecoponto Liberdade" },
      { lat: -23.5271629, lng: -46.6507547, title: "Ecoponto Barrafunda" },
      { lat: -23.5965994, lng: -46.7529815, title: "Ecoponto Jardim Maria do Carmo" },
      { lat: -23.5788379, lng: -46.4887849, title: "Ecoponto Parque do Carmo" },
  ];

  locations.forEach(location => {
      new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.title
      });
  });
}

window.initMap = initMap;
