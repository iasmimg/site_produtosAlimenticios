window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.item', {
    duration: 2000,
    distance:'30px'
})

//BOX DAS SECÇÕES DE ALIMENTOS 

revelar.reveal('.container3,.subcontainer3', {
    duration: 2000,
    distance:'30px',
    delay: 400
})

//SECÇÃO BOLOS E TORTAS

revelar.reveal('.efeito-img-bolos', {
    duration: 2000,
    distance:'90px',
})

revelar.reveal('.efeito-txt1-bolos', {
    duration: 2000,
    distance:'30px',
    delay:500
})

revelar.reveal('.efeito-txt2-bolos', {
    duration: 2000,
    distance:'30px',
    delay:700
})

revelar.reveal('.efeito-direita-bolos', {
    duration: 3000,
    distance:'90px',
    delay:500,
    origin:'left'
})

revelar.reveal('.efeito-esquerda-bolos', {
    duration: 3000,
    distance:'90px',
    delay:500,
    origin:'right'
})

revelar.reveal('.sobre', {
    duration: 1000,
    distance:'30px',
})


