export type ProductImage={label:string;src:string};
export type BrandDetail={url:string;video?:string;intro:string;highlights:string[];gallery:ProductImage[];variants?:{name:string;images:ProductImage[]}[];note:string};
export const brandDetails:Record<string,BrandDetail> = {
  "Refriko": {
    "video": "ORJpJZDV_Qs",
    "url": "https://refriko.com.br/",
    "intro": "Sabores que fazem parte da mesa brasileira, em uma linha pensada para diferentes momentos de consumo.",
    "highlights": [
      "7 famílias de sabores",
      "Opção Tubaína sem açúcar",
      "Embalagens individuais e para compartilhar"
    ],
    "gallery": [
      {
        "label": "Tubaína",
        "src": "/images/catalog/40eb6dd2c230e6.png"
      },
      {
        "label": "Guaraná",
        "src": "/images/catalog/7c42cdb60eaf87.png"
      },
      {
        "label": "Laranja",
        "src": "/images/catalog/db3bb0e55229c1.png"
      },
      {
        "label": "Limão",
        "src": "/images/catalog/9ea387c2be8d34.png"
      },
      {
        "label": "Uva",
        "src": "/images/catalog/1c151b34392ee5.png"
      },
      {
        "label": "Framboesa",
        "src": "/images/catalog/3690b52c949a12.png"
      },
      {
        "label": "Cola",
        "src": "/images/catalog/591bd8a63cd7b7.png"
      }
    ],
    "note": "Explore as famílias para ver as apresentações de cada sabor. A linha Tubaína sem açúcar conta com 300 ml e 2 L. Consulte a disponibilidade regional."
  },
  "Moema": {
    "url": "https://cervejamoema.com.br/home/",
    "video": "znIBtYuVy54",
    "intro": "Uma cerveja para encontros descontraídos, com seis apresentações para diferentes ocasiões e pontos de venda.",
    "highlights": [
      "Latas de 269, 350 e 473 ml",
      "Garrafas de 300, 600 ml e 1 L",
      "Variedade para o varejo"
    ],
    "gallery": [
      {
        "label": "Lata 269 ml",
        "src": "/images/catalog/386091bec31f94.png"
      },
      {
        "label": "Lata 350 ml",
        "src": "/images/catalog/1dab45339038bf.png"
      },
      {
        "label": "Lata 473 ml",
        "src": "/images/catalog/9bc8890879d3db.png"
      },
      {
        "label": "Garrafa 300 ml",
        "src": "/images/catalog/21e1938f6de2a0.png"
      },
      {
        "label": "Garrafa 600 ml",
        "src": "/images/catalog/f4547f49a576d8.png"
      },
      {
        "label": "Garrafa 1 L",
        "src": "/images/catalog/54746f9104502a.png"
      }
    ],
    "note": "Compare as apresentações na galeria. Consulte disponibilidade, acondicionamento e condições comerciais com a equipe RFK."
  },
  "Bamboa": {
    "url": "https://cervejabamboa.com.br/",
    "intro": "Cerveja puro malte com receita que combina três variedades de lúpulo e duas de malte. Uma marca com foco no equilíbrio entre aroma, sabor e refrescância.",
    "highlights": [
      "Puro malte",
      "Três variedades de lúpulo",
      "Lata e garrafas"
    ],
    "gallery": [
      {
        "label": "Long neck 330 ml",
        "src": "/images/catalog/0e2c17f89a7977.png"
      },
      {
        "label": "Lata 350 ml",
        "src": "/images/catalog/a0ec002e8adf14.png"
      },
      {
        "label": "Garrafa 300 ml",
        "src": "/images/catalog/4e0f177685bef6.png"
      },
      {
        "label": "Garrafa 600 ml",
        "src": "/images/catalog/ea34cfd6dda151.png"
      }
    ],
    "note": "As apresentações exibidas fazem parte do catálogo da marca. Consulte disponibilidade regional e condições de fornecimento."
  },
  "Furioso": {
    "url": "https://www.furiosoenergydrink.com.br/",
    "intro": "Energéticos com diferentes combinações de sabores, formatos individuais e garrafas de 2 litros. A linha inclui versões zero açúcar.",
    "highlights": [
      "Garrafas de 250 ml e 2 L",
      "Latas de 269 e 473 ml",
      "Opções zero açúcar"
    ],
    "gallery": [
      {
        "label": "Garrafa 250 ml",
        "src": "/images/catalog/b3b5127cb00fde.png"
      },
      {
        "label": "Lata 269 ml",
        "src": "/images/catalog/002a48e6b6d3f7.png"
      },
      {
        "label": "Lata 473 ml",
        "src": "/images/catalog/f5b38174b948f0.png"
      },
      {
        "label": "Garrafa 2 L",
        "src": "/images/catalog/e636d8a16c34f3.png"
      }
    ],
    "note": "Os formatos variam por sabor. Confira ingredientes, informação nutricional e orientações de consumo no rótulo da apresentação escolhida.",
    "variants": [
      {
        "name": "Tradicional",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/b3b5127cb00fde.png"
          },
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/002a48e6b6d3f7.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/f5b38174b948f0.png"
          },
          {
            "label": "Garrafa 2 L",
            "src": "/images/catalog/e636d8a16c34f3.png"
          }
        ]
      },
      {
        "name": "Melancia e morango",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/51d4a34e4800d4.png"
          },
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/fa53310ac38b32.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/4a6874a2288c3e.png"
          },
          {
            "label": "Garrafa 2 L",
            "src": "/images/catalog/8f1165fb679ac2.png"
          }
        ]
      },
      {
        "name": "Maçã verde e melão",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/fb8ee708a71de3.png"
          },
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/e38f5e291eeab6.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/0b0998a0bd84be.png"
          },
          {
            "label": "Garrafa 2 L",
            "src": "/images/catalog/f81e5f25f01bf7.png"
          }
        ]
      },
      {
        "name": "Tropical",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/07eb7f5bcfffc0.png"
          },
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/fdaf2368a0dd05.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/37d67d692ccbb0.png"
          },
          {
            "label": "Garrafa 2 L",
            "src": "/images/catalog/66adc6b36f4003.webp"
          }
        ]
      },
      {
        "name": "Uva verde e pêssego",
        "images": [
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/fe266bef838d23.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/6305e992ad4735.png"
          },
          {
            "label": "Garrafa 2 L",
            "src": "/images/catalog/cd75c2be6bedb4.png"
          }
        ]
      },
      {
        "name": "Tradicional zero",
        "images": [
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/2cae3b8ed1ba72.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/596d8544c6310b.png"
          }
        ]
      },
      {
        "name": "Melancia e morango zero",
        "images": [
          {
            "label": "Lata 269 ml",
            "src": "/images/catalog/14528914cd6389.png"
          },
          {
            "label": "Lata 473 ml",
            "src": "/images/catalog/848f8896a016b7.png"
          }
        ]
      },
      {
        "name": "Açaí",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/6c649abd8acc28.png"
          }
        ]
      },
      {
        "name": "Citrus",
        "images": [
          {
            "label": "Garrafa 250 ml",
            "src": "/images/catalog/15a6ebd5c810c9.png"
          }
        ]
      }
    ]
  }
};
