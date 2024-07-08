// Lista de videos
const videos = [
    { title: 'Ángela Cuadros - BIJAHUAL', url: 'https://www.youtube.com/embed/7CWinXQE6jo' },
            { title: 'Eufrasia Sinforosa Cusme Cusme - BIJAHUAL', url: 'https://www.youtube.com/embed/GFqKUFEK1rQ' },
            { title: 'Evangelista Elsita Cevallos Loor – BIJAHUAL', url: 'https://www.youtube.com/embed/ansd0yDtL3Q' },
            { title: 'Felipa Mariana de Jesús Cusme – BIJAHUAL', url: 'https://www.youtube.com/embed/wJVvEf7AI7Q' },
            { title: 'Lucrecia Zambrano y Rosa Zambrano – BIJAHUAL', url: 'https://www.youtube.com/embed/9FOhDmtlkKk' },
            { title: 'Manuel Manzaba – BIJAHUAL', url: 'https://www.youtube.com/embed/M0zpQF4P2BI' },
            { title: 'Nieve Ramona Espinoza Barreto – BIJAHUAL', url: 'https://www.youtube.com/embed/jproaU2yiKE' },
            { title: 'Ramona Cecilia Vargas – BIJAHUAL', url: 'https://www.youtube.com/embed/cqhTbKdZViA' },
            { title: 'Ramona Teresa Zambrano Alcívar – BIJAHUAL', url: 'https://www.youtube.com/embed/a3tK1D8Ic5I' },
            { title: 'Rosa Mitte y Jorge Chica – BIJAHUAL', url: 'https://www.youtube.com/embed/hSLe3-AWOK4' },
            { title: 'Wilmer Remberto Cuadros Cevallos - BIJAHUAL', url: 'https://www.youtube.com/embed/4iFGFGqdmsw' },
            { title: 'Ederma del Carmen Briones - CADIALITOS', url: 'https://www.youtube.com/embed/g6Q-D5kULtQ' },
            { title: 'Fulgencio Jama y Jesús Garcés – CADIALITOS', url: 'https://www.youtube.com/embed/pCqZXB-i3jk' },
            { title: 'Jorge Burgos y Mercedes Moreira - CADIALITOS', url: 'https://www.youtube.com/embed/WIQDHB7aZdg' },
            { title: 'Jovita Carreño - CADIALITOS', url: 'https://www.youtube.com/embed/lbH5qtyDBaQ' },
            { title: 'María Jama - CADIALITOS', url: 'https://www.youtube.com/embed/LaZPhdXvOT8' },
            { title: 'Mary Zambrano - CADIALITOS', url: 'https://www.youtube.com/embed/CuiUXJrsdzI' },
            { title: 'Miguel Ángel Zambrano - CADIALITOS', url: 'https://www.youtube.com/embed/q-E-tNYGhS8' },
            { title: 'Simón Vergara - CADIALITOS', url: 'https://www.youtube.com/embed/rXXAzGR2cVM' },
            { title: 'Epifania Asunción Loor Cedeño - CALADA', url: 'https://www.youtube.com/embed/PSiWea4QAbc' },
            { title: 'Eugenia Benita Cedeño - CALADA', url: 'https://www.youtube.com/embed/5Tsu1AxFmE8' },
            { title: 'Gladys Teresa Santillán Góngora - CALADA', url: 'https://www.youtube.com/embed/zsoKq7KxgqI' },
            { title: 'Julián Antonio Ormaza Mendoza - CALADA', url: 'https://www.youtube.com/embed/uQBcHFyxzAI' },
            { title: 'Laura Margarita Ormaza Zambrano - CALADA', url: 'https://www.youtube.com/embed/GNAbia5Qphk' },
            { title: 'Luciano Tranquilino Bermúdez Loor - CALADA', url: 'https://www.youtube.com/embed/8mcxd3KSIeg' },
            { title: 'Orlando Ananías Mera Farias - CALADA', url: 'https://www.youtube.com/embed/sADuGtGZtBQ' },
            { title: 'Segundino Bermúdez Acosta - CALADA', url: 'https://www.youtube.com/embed/VI7YiMlDuQw' },
            { title: 'Domitila Arias - CAÑAVERAL', url: 'https://www.youtube.com/embed/BosQC-PdGAU' },
            { title: 'Erasmo Zambrano y Jacinta Betancourt - CAÑAVERAL', url: 'https://www.youtube.com/embed/DIlmcTFLNV8' },
            { title: 'Flor Hidalia Loor Intriago - CAÑAVERAL', url: 'https://www.youtube.com/embed/gvIK8IonNgo' },
            { title: 'Manuel de Jesús Arias Véliz - CAÑAVERAL', url: 'https://www.youtube.com/embed/tYTWj740ryk' },
            { title: 'Carmen Alcívar - CHIMBORAZO', url: 'https://www.youtube.com/embed/R7akk91OHlk' },
            { title: 'Gualberta Cagua - CHIMBORAZO', url: 'https://www.youtube.com/embed/S9jbkxjydK0' },
            { title: 'Samuel Zambrano - CHIMBORAZO', url: 'https://www.youtube.com/embed/qaWdhx77eqU' },
            { title: 'Ángela Farías - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/U8p0MvtfO78' },
            { title: 'Bella Pazmiño y Edgar Castro - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/BOWqnXkBaco' },
            { title: 'Francisca Cedeño - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/C_pebqpi3ec' },
            { title: 'Jacinta Basurto - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/gIsL6ScRhXI' },
            { title: 'Luis Bermúdez - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/IY0FwBWwPok' },
            { title: 'Otón Cedeño y Dolores Herrera - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/Pqh3fg-Eiyw' },
            { title: 'Ovidio Bermello - CINCO DE JUNIO', url: 'https://www.youtube.com/embed/xyzXqlY30wU' },
            { title: 'Manuel Medardo Valdez Cevallos - COLORADO (JAMA)', url: 'https://www.youtube.com/embed/Ihf86cUyw9Y' },
            { title: 'Claudio Cedeño - DOMINGUILLO', url: 'https://www.youtube.com/embed/A_87Lp1MUuo' },
            { title: 'Ely Heriberto Zambrano - DOMINGUILLO', url: 'https://www.youtube.com/embed/W4xGwjsw6kY' },
            { title: 'Erlita Loor y Roque Cedeño - DOMINGUILLO', url: 'https://www.youtube.com/embed/bVjZXyBZ29k' },
            { title: 'Esperanza Cedeño - DOMINGUILLO', url: 'https://www.youtube.com/embed/PNfG8ojZlpY' },
            { title: 'Jacinto Arauz - DOMINGUILLO', url: 'https://www.youtube.com/embed/m08Uk0waHEs' },
            { title: 'Jorge Santos y Haida Cedeño - DOMINGUILLO', url: 'https://www.youtube.com/embed/_cEoEgMIc-E' },
            { title: 'Luis Cedeño y Rosario Hidalgo - DOMINGUILLO', url: 'https://www.youtube.com/embed/tzxaZGVEqlE' },
            { title: 'Mercedes Cedeño - DOMINGUILLO', url: 'https://www.youtube.com/embed/DA-zdWcHVaI' },
            { title: 'Olilia Zambrano - DOMINGUILLO', url: 'https://www.youtube.com/embed/ccXsrFwDE_E' },
            { title: 'Ramona Véliz - DOMINGUILLO', url: 'https://www.youtube.com/embed/arQrtapLT4M' },
            { title: 'Zoila Pinargote - DOMINGUILLO', url: 'https://www.youtube.com/embed/ZbbElNIeGIo' }// ... otros videos
];

// Función para mostrar videos en el contenedor
function showVideos(videosToShow) {
    const container = document.getElementById('my-videos');
    container.innerHTML = ''; // Limpiar el contenedor

    videosToShow.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        const iframe = document.createElement('iframe');
        iframe.width = '300';
        iframe.height = '200';
        iframe.src = video.url;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.addEventListener('click', () => openModal(video.url));

        const h2 = document.createElement('h2');
        h2.textContent = video.title;

        videoItem.appendChild(iframe);
        videoItem.appendChild(h2);

        container.appendChild(videoItem);
    });
}

// Mostrar los primeros 12 videos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showVideos(videos.slice(0, 12)); // Mostrar los primeros 12 videos
});

// Función para buscar videos
function searchVideos() {
    const searchTerm = document.getElementById('video-search').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    showVideos(filteredVideos);
}

// Función para mostrar más videos
function showMoreVideos() {
    const container = document.getElementById('my-videos');
    const hiddenVideos = videos.slice(container.children.length); // Obtener los videos no mostrados

    hiddenVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        const iframe = document.createElement('iframe');
        iframe.width = '300';
        iframe.height = '200';
        iframe.src = video.url;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.addEventListener('click', () => openModal(video.url));

        const h2 = document.createElement('h2');
        h2.textContent = video.title;

        videoItem.appendChild(iframe);
        videoItem.appendChild(h2);

        container.appendChild(videoItem);
    });

    // Ocultar el botón si no hay más videos por mostrar
    if (container.children.length === videos.length) {
        document.getElementById('show-more-btn').style.display = 'none';
    }
}

// Función para abrir el modal con el video ampliado
function openModal(url) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = 'block';
    modalVideo.src = url;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = 'none';
    modalVideo.src = '';
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('video-modal');
    if (event.target === modal) {
        closeModal();
    }
});
