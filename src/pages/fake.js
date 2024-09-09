import { v4 as uuidv4 } from 'uuid';

export const values = [{ 
    id: '7d3850f2-00ce-4d2a-8ec5-75770e069b4e',
    name: 'Blusa joia',
    image: 'https://mariafilo.vtexassets.com/arquivos/ids/299775/1502202_019_3-BLUSA-CROPPED-ESTAMPA-JOIA.jpg?v=637611006211130000',
    description: 'sdasdasdasdasd',
    price: 101.5,
    category: {
        name: 'Blusa'
    } 
}]

export const values2 = [{ 
    id: '857dbb55-5e63-4abb-a77e-d7600caf1368',
    name: 'Blusa joia2',
    image: 'https://mariafilo.vtexassets.com/arquivos/ids/299775/1502202_019_3-BLUSA-CROPPED-ESTAMPA-JOIA.jpg?v=637611006211130000',
    description: 'tão legal quanto a outra',
    price: 101.5,
    category: {
        name: 'Blusa'
    } 
}]

export const bands = [
    {
        id: uuidv4(),
        name: "Banda 1",
    },
    {
        id: uuidv4(),
        name: "Banda 2",
    },
    {
        id: uuidv4(),
        name: "30PRAUM",
        description: "A 30PRAUM é a produtora e selo musical fundada pelo rapper Matuê junto a sua sócia Clara Mendes em Fortaleza-CE. Criada em 2016, a '30' - como é intimamente referenciada pelos milhões de fãs espalhados pelo Brasil - tem sido pioneira na fomentação da música e cultura urbana no Nordeste, além de ter se tornado, nos últimos anos, uma referência em excelência artística e sucesso comercial no país, posicionando o rap e o trap nordestinos no topo dos charts nacionais. Seu casting, composto atualmente pelos artistas Matuê, WIU e Teto, representa uma das grandes potências do cenário musical brasileiro, acumulando bilhões de plays em hits como 'Vampiro', 'Coração de Gelo', 'Fim de Semana no Rio' e 'Conexões de Máfia', além de uma agenda de shows esgotados dentro e fora do país. Com um direcionamento artístico autêntico e estratégias criativas que buscam inovar e renovar os padrões da indústria, a 30PRAUM já carrega, em poucos anos de existência, um histórico de recordes e resultados impressionantes, que se tornaram cases de referência no mercado musical. Atualmente, a equipe 30PRAUM é composta por mais de 60 colaboradores, distribuídos entre sua sede em Fortaleza e uma filial em São Paulo. Os talentos de perfis diversos e marcados pela pluralidade se unem em duas características principais: a paixão por criar experiências memoráveis para os fãs e a ambição de deixar sua marca na história da música e da arte no Brasil. É A 30 NO COMANDO! — Siga a 30PRAUM e seus artistas nas redes sociais: Instagram: @30praum | @matue | @hotwiu30 | @euteto",
        image: "https://i0.wp.com/www.rapdab.com.br/wp-content/uploads/2022/01/30PRAUM-MATUE-PODPAH.jpg?fit=1250%2C750&ssl=1"
    },
    {
        id: uuidv4(),
        name: "Banda 4",
    },
    {
        id: uuidv4(),
        name: "Banda 5",
    },
]

export const products = [
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 1', price: 100, bands: [bands[0].id]}, 
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 2', price: 200, bands: [bands[1].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 3', price: 300, bands: [bands[2].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 4', price: 400, bands: [bands[3].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 5', price: 500, bands: [bands[4].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 6', price: 600, bands: [bands[0].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 1', price: 100, bands: [bands[1].id]}, 
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 2', price: 200, bands: [bands[2].id, bands[0].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 3', price: 300, bands: [bands[3].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 4', price: 400, bands: [bands[4].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 5', price: 500, bands: [bands[0].id]},
    {id: uuidv4(), image: 'https://via.placeholder.com/150', name: 'Produto 6', price: 600, bands: [bands[1].id]},
] 