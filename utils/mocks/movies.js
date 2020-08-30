const moviesMock = [
    {
      "id": "9d308629-c635-4dc6-a5fe-971236939cb0",
      "title": "Somebody to Love",
      "year": 2008,
      "cover": "http://dummyimage.com/141x209.bmp/cc0000/ffffff",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "duration": 1943,
      "contentRating": "PG-13",
      "source": "https://stanford.edu/consequat/in.jsp?non=interdum&ligula=mauris&pellentesque=ullamcorper&ultrices=purus&phasellus=sit&id=amet&sapien=nulla&in=quisque&sapien=arcu&iaculis=libero&congue=rutrum&vivamus=ac",
      "tags": [
        "Action|Comedy|Crime|Drama",
        "Comedy|Musical",
        "Horror|Sci-Fi|Thriller"
      ]
    },
    {
      "id": "a3526cdf-ba10-42e0-8c9f-fa272fd68042",
      "title": "Alvarez Kelly",
      "year": 2010,
      "cover": "http://dummyimage.com/212x114.bmp/cc0000/ffffff",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "duration": 2061,
      "contentRating": "PG-13",
      "source": "http://angelfire.com/ante/vestibulum/ante/ipsum/primis/in/faucibus.png?dui=ipsum&luctus=praesent&rutrum=blandit&nulla=lacinia&tellus=erat&in=vestibulum&sagittis=sed&dui=magna&vel=at&nisl=nunc&duis=commodo&ac=placerat&nibh=praesent&fusce=blandit&lacus=nam&purus=nulla&aliquet=integer&at=pede&feugiat=justo&non=lacinia",
      "tags": [
        "Comedy|Drama",
        "Drama|Thriller",
        "Comedy",
        "Comedy|Drama"
      ]
    },
    {
      "id": "45054153-5fe1-411f-aa39-c3cdf16fc249",
      "title": "Gentleman's Agreement",
      "year": 1988,
      "cover": "http://dummyimage.com/233x167.bmp/5fa2dd/ffffff",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "duration": 2056,
      "contentRating": "PG-13",
      "source": "http://paypal.com/pharetra/magna/ac/consequat.html?vitae=natoque&nisl=penatibus&aenean=et&lectus=magnis&pellentesque=dis&eget=parturient&nunc=montes&donec=nascetur&quis=ridiculus&orci=mus&eget=vivamus&orci=vestibulum&vehicula=sagittis&condimentum=sapien&curabitur=cum&in=sociis&libero=natoque&ut=penatibus&massa=et",
      "tags": [
        "Documentary"
      ]
    },
    {
      "id": "cf4089f6-e2f3-4732-ab1a-52c763c0e241",
      "title": "Shottas",
      "year": 2009,
      "cover": "http://dummyimage.com/108x101.png/dddddd/000000",
      "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "duration": 1901,
      "contentRating": "PG-13",
      "source": "https://shop-pro.jp/orci/luctus/et/ultrices/posuere/cubilia.jsp?praesent=sem&blandit=sed&nam=sagittis&nulla=nam&integer=congue&pede=risus&justo=semper&lacinia=porta&eget=volutpat",
      "tags": [
        "Drama"
      ]
    },
    {
      "id": "edc72503-d95c-4d6e-8ee9-ef6ad09253f9",
      "title": "Breaking and Entering",
      "year": 1995,
      "cover": "http://dummyimage.com/173x133.bmp/ff4444/ffffff",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "duration": 2037,
      "contentRating": "NC-17",
      "source": "http://slate.com/nullam/sit/amet/turpis/elementum/ligula/vehicula.aspx?sem=ut&duis=nunc&aliquam=vestibulum&convallis=ante&nunc=ipsum&proin=primis&at=in&turpis=faucibus&a=orci&pede=luctus&posuere=et&nonummy=ultrices&integer=posuere&non=cubilia&velit=curae&donec=mauris&diam=viverra&neque=diam&vestibulum=vitae&eget=quam&vulputate=suspendisse&ut=potenti&ultrices=nullam&vel=porttitor&augue=lacus&vestibulum=at&ante=turpis&ipsum=donec&primis=posuere&in=metus&faucibus=vitae&orci=ipsum&luctus=aliquam&et=non&ultrices=mauris&posuere=morbi&cubilia=non&curae=lectus&donec=aliquam&pharetra=sit&magna=amet&vestibulum=diam&aliquet=in&ultrices=magna&erat=bibendum",
      "tags": [
        "Adventure|Children",
        "Action|Adventure",
        "Drama"
      ]
    },
    {
      "id": "2aab0fb5-71f6-44df-9ad1-49d52616bd85",
      "title": "Carnival of Souls",
      "year": 1991,
      "cover": "http://dummyimage.com/238x146.jpg/dddddd/000000",
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "duration": 1965,
      "contentRating": "NC-17",
      "source": "https://goo.gl/pede/morbi/porttitor/lorem/id.jsp?sit=dui&amet=vel&diam=nisl&in=duis&magna=ac&bibendum=nibh&imperdiet=fusce&nullam=lacus&orci=purus&pede=aliquet&venenatis=at&non=feugiat&sodales=non&sed=pretium&tincidunt=quis&eu=lectus&felis=suspendisse&fusce=potenti&posuere=in&felis=eleifend&sed=quam&lacus=a&morbi=odio",
      "tags": [
        "Comedy",
        "Comedy|Drama|Romance",
        "Comedy|Drama",
        "Animation|Children",
        "Documentary"
      ]
    },
    {
      "id": "92a58e26-0707-4bfc-9092-d2692f7a94b8",
      "title": "Loose Cannons (Mine vaganti)",
      "year": 1995,
      "cover": "http://dummyimage.com/153x124.bmp/cc0000/ffffff",
      "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "duration": 2010,
      "contentRating": "NC-17",
      "source": "http://usa.gov/gravida/nisi/at/nibh/in/hac/habitasse.png?tortor=eu",
      "tags": [
        "Action|Comedy|Crime",
        "Drama|Romance",
        "Drama"
      ]
    },
    {
      "id": "3bdafb93-c499-4fac-81ea-0eba939ac22f",
      "title": "One in a Million: The Ron LeFlore Story",
      "year": 2009,
      "cover": "http://dummyimage.com/218x179.jpg/cc0000/ffffff",
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "duration": 2039,
      "contentRating": "PG-13",
      "source": "http://mediafire.com/bibendum/imperdiet/nullam/orci/pede/venenatis.jpg?augue=interdum&vestibulum=venenatis&ante=turpis&ipsum=enim&primis=blandit&in=mi&faucibus=in&orci=porttitor&luctus=pede&et=justo&ultrices=eu&posuere=massa&cubilia=donec&curae=dapibus&donec=duis&pharetra=at&magna=velit&vestibulum=eu&aliquet=est&ultrices=congue&erat=elementum&tortor=in&sollicitudin=hac&mi=habitasse&sit=platea&amet=dictumst&lobortis=morbi&sapien=vestibulum&sapien=velit&non=id&mi=pretium&integer=iaculis&ac=diam&neque=erat&duis=fermentum&bibendum=justo&morbi=nec&non=condimentum&quam=neque&nec=sapien&dui=placerat&luctus=ante&rutrum=nulla&nulla=justo&tellus=aliquam&in=quis&sagittis=turpis",
      "tags": [
        "Drama|Horror|Sci-Fi",
        "Children|Comedy|Fantasy",
        "Action|Crime|Drama|Thriller"
      ]
    },
    {
      "id": "93ce63da-a597-4ac8-b3d7-e3c57c48aaa7",
      "title": "Elephant Man, The",
      "year": 1995,
      "cover": "http://dummyimage.com/226x111.png/dddddd/000000",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "duration": 2066,
      "contentRating": "G",
      "source": "http://com.com/et.js?cubilia=massa&curae=donec&duis=dapibus&faucibus=duis&accumsan=at&odio=velit&curabitur=eu&convallis=est&duis=congue&consequat=elementum&dui=in&nec=hac&nisi=habitasse&volutpat=platea&eleifend=dictumst&donec=morbi&ut=vestibulum&dolor=velit&morbi=id&vel=pretium&lectus=iaculis&in=diam&quam=erat&fringilla=fermentum&rhoncus=justo&mauris=nec&enim=condimentum&leo=neque&rhoncus=sapien&sed=placerat&vestibulum=ante&sit=nulla&amet=justo&cursus=aliquam&id=quis&turpis=turpis&integer=eget&aliquet=elit&massa=sodales&id=scelerisque&lobortis=mauris&convallis=sit&tortor=amet&risus=eros&dapibus=suspendisse&augue=accumsan&vel=tortor&accumsan=quis&tellus=turpis&nisi=sed&eu=ante&orci=vivamus&mauris=tortor&lacinia=duis&sapien=mattis&quis=egestas&libero=metus&nullam=aenean&sit=fermentum&amet=donec&turpis=ut&elementum=mauris&ligula=eget&vehicula=massa&consequat=tempor&morbi=convallis&a=nulla&ipsum=neque&integer=libero&a=convallis&nibh=eget&in=eleifend&quis=luctus&justo=ultricies&maecenas=eu&rhoncus=nibh&aliquam=quisque&lacus=id&morbi=justo&quis=sit&tortor=amet",
      "tags": [
        "Animation|Horror",
        "Children|Drama",
        "Action|Drama|Thriller"
      ]
    },
    {
      "id": "98fac6d6-6893-4d5c-a4f9-ffbf06cee08f",
      "title": "Baby, the Rain Must Fall",
      "year": 1985,
      "cover": "http://dummyimage.com/101x233.bmp/cc0000/ffffff",
      "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "duration": 2060,
      "contentRating": "PG-13",
      "source": "https://github.com/dapibus/at/diam/nam/tristique/tortor.js?odio=nunc&odio=nisl&elementum=duis&eu=bibendum&interdum=felis&eu=sed&tincidunt=interdum&in=venenatis&leo=turpis&maecenas=enim&pulvinar=blandit&lobortis=mi&est=in&phasellus=porttitor&sit=pede&amet=justo&erat=eu&nulla=massa&tempus=donec&vivamus=dapibus&in=duis&felis=at&eu=velit&sapien=eu&cursus=est&vestibulum=congue&proin=elementum&eu=in&mi=hac&nulla=habitasse&ac=platea&enim=dictumst&in=morbi&tempor=vestibulum&turpis=velit&nec=id&euismod=pretium&scelerisque=iaculis&quam=diam&turpis=erat&adipiscing=fermentum&lorem=justo&vitae=nec&mattis=condimentum&nibh=neque&ligula=sapien&nec=placerat&sem=ante&duis=nulla&aliquam=justo&convallis=aliquam&nunc=quis&proin=turpis&at=eget&turpis=elit&a=sodales&pede=scelerisque&posuere=mauris&nonummy=sit&integer=amet&non=eros&velit=suspendisse&donec=accumsan&diam=tortor&neque=quis&vestibulum=turpis&eget=sed&vulputate=ante&ut=vivamus&ultrices=tortor&vel=duis&augue=mattis&vestibulum=egestas&ante=metus&ipsum=aenean&primis=fermentum&in=donec&faucibus=ut&orci=mauris&luctus=eget&et=massa&ultrices=tempor&posuere=convallis&cubilia=nulla&curae=neque&donec=libero&pharetra=convallis&magna=eget&vestibulum=eleifend&aliquet=luctus&ultrices=ultricies&erat=eu&tortor=nibh&sollicitudin=quisque&mi=id&sit=justo&amet=sit",
      "tags": [
        "Drama",
        "Drama",
        "Drama|Romance",
        "Drama",
        "Drama"
      ]
    }
  ];

function filterMoviesMock(id) {
  return moviesMock.filter(movie => movie.id.includes(id));
}

class MoviesServiceMock {
  async getmovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
    moviesMock,
    filterMoviesMock,
    MoviesServiceMock
};