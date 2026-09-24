'use client';
import {useState} from 'react';
import {X,Play,Plus,Check,ExternalLink,ChevronLeft,ChevronRight} from 'lucide-react';
import {brandDetails} from './brand-details';
import {DialogClose} from '@/components/ui/dialog';
import type {Brand} from './data';
export function BrandShowcase({brand,selected,onToggle}:{brand:Brand;selected:boolean;onToggle:()=>void}){
 const d=brandDetails[brand.name];
 const [variant,setVariant]=useState(0),[photo,setPhoto]=useState(0),[playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 const gallery=d?.variants?.[variant].images||d?.gallery||[{src:brand.image||brand.logo,label:brand.name}];
 const active=gallery[photo];
 const change=(i:number)=>{setPhoto(i);setFailed(false)};
 return <div className={`product-showcase ${d?.video?'has-film':''}`} style={{'--product-color':brand.color} as React.CSSProperties}>
 <DialogClose className="showcase-close" aria-label="Fechar"><X size={20}/></DialogClose><header className="product-heading"><img src={brand.logo} alt=""/><div><span>{brand.category}{brand.alcohol?' • 18+':''}</span><h2>{brand.name}</h2></div></header>
 <div className="product-layout"><div className="product-media">
 {d?.video&&<div className="product-film">{playing?<iframe title={`Filme ${brand.name}`} src={`https://www.youtube-nocookie.com/embed/${d.video}?autoplay=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:<button onClick={()=>setPlaying(true)} aria-label={`Reproduzir filme ${brand.name}`}><img src={brand.logo} alt={`Filme da marca ${brand.name}`}/><span><Play size={25} fill="currentColor"/>Assista ao filme</span></button>}</div>}
 <figure className={`product-stage ${brand.name==='Refriko'?'family-stage':''}`}>
 {failed?<div className="product-image-fallback"><img src={brand.logo} alt={brand.name}/><p>Imagem indisponível no momento.</p></div>:<img key={active.src} src={active.src} alt={`${brand.name} — ${active.label}`} onError={()=>setFailed(true)}/>}
 {gallery.length>1&&<><button className="gallery-prev" aria-label="Imagem anterior" onClick={()=>change((photo-1+gallery.length)%gallery.length)}><ChevronLeft size={20}/></button><button className="gallery-next" aria-label="Próxima imagem" onClick={()=>change((photo+1)%gallery.length)}><ChevronRight size={20}/></button></>}
 <figcaption><span>{active.label}</span><span>{photo+1} / {gallery.length}</span></figcaption></figure>
 <div className="product-thumbnails" aria-label="Galeria de produtos">{gallery.map((im,i)=><button key={im.src} aria-label={`Exibir ${im.label}`} aria-pressed={photo===i} onClick={()=>change(i)}><img src={im.src} alt="" loading="lazy"/><span>{im.label}</span></button>)}</div>
 </div><div className="showcase-info"><p className="product-intro">{d?.intro||brand.description}</p>
 {d?.highlights&&<ul className="product-highlights">{d.highlights.map(h=><li key={h}><Check size={17}/>{h}</li>)}</ul>}
 {d?.variants&&<div className="product-options"><h3>Escolha o sabor</h3><div>{d.variants.map((v,i)=><button key={v.name} aria-pressed={variant===i} onClick={()=>{setVariant(i);change(0)}}>{v.name}</button>)}</div></div>}
 <div className="product-options"><h3>{brand.name==='Refriko'?'Famílias de sabores':'Embalagens e apresentações'}</h3><div>{gallery.map((im,i)=><button key={im.src} aria-pressed={photo===i} onClick={()=>change(i)}>{im.label}</button>)}</div></div>
 <p className="product-note">{d?.note||brand.formats}</p>
 {!d&&<p className="product-note">{brand.detail}</p>}
 <div className="product-actions"><button className="button blue" onClick={onToggle}>{selected?<Check size={18}/>:<Plus size={18}/>} {selected?'Remover da minha seleção':'Adicionar à minha seleção'}</button>{d&&<a href={d.url} target="_blank" rel="noopener noreferrer">Conhecer o site {brand.name} <ExternalLink size={16}/></a>}<a href="https://loja.gruporfk.com.br/" target="_blank" rel="noopener noreferrer">Visitar a loja RFK <ExternalLink size={16}/></a></div>
 {brand.alcohol&&<p className="product-responsibility">Venda e consumo para maiores de 18 anos. Se for dirigir, não beba.</p>}
 </div></div></div>;
}
