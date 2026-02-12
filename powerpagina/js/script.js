document.addEventListener('DOMContentLoaded', async function() {
    // Configurações Padrão
    const defaultData = {
        companyName: "Power Watts Resistências",
        cnpj: "22.571.043/0001-60",
        address: "R. Oswaldo Mezadri, 445\nJardim Mirante dos Ovnis\nVotorantim - SP, CEP: 18116-385",
        phone: "(15) 2107-3595",
        whatsapp: "15981914455",
        heroTitle: "Resistências Elétricas Industriais com Potência e Precisão",
        heroSubtitle: "Fabricação especializada de resistências elétricas para autoclaves, seladoras, fornos industriais e projetos sob medida com qualidade comprovada e entrega rápida.",
        heroBenefits: "Fabricação sob medida\nAlta durabilidade e eficiência\nAtendimento técnico especializado\nEntrega rápida para todo Brasil",
        proofYears: "+22 anos de mercado",
        proofProducts: "+105.000 resistências fabricadas",
        proofLocation: "Fábrica própria em Votorantim-SP",
        ctaTitle: "Precisa de Resistência Industrial com Qualidade Garantida?",
        ctaSubtitle: "Nossa equipe de especialistas está pronta para desenvolver a solução perfeita para o seu equipamento. Solicite seu orçamento agora mesmo!",
        urgencyText: "Atendimento imediato via WhatsApp - Orçamento em até 1 hora!",
        yearsCounter: 22,
        clientsCounter: 5500,
        productsCounter: 105000,
        footerDesc: "Especialistas em resistências elétricas industriais com mais de 22 anos de experiência no mercado. Qualidade, precisão e atendimento personalizado.",
        copyright: "© 2026 Power Watts Resistências - CNPJ: 22.571.043/0001-60 - Todos os direitos reservados.\nEsta página é otimizada para conversão de tráfego do Google Ads. Resistências elétricas industriais de alta qualidade com atendimento especializado via WhatsApp.",
        storeLink: "http://www.powerwattsresistencias.com.br",
        facebookLink: "https://www.facebook.com/share/17zi35ynNG/",
        heroBtnText: "Solicitar Orçamento no WhatsApp",
        ctaBtnText: "FALAR COM ESPECIALISTA AGORA",
        primaryColor: "#0a192f",
        accentColor: "#ff6b35",
        whatsappColor: "#25D366",
        logoPath: "assets/logo.png",
        products: [
            { name: "Resistência Coleira de Mica", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" },
            { name: "Resistência Coleira Cerâmica", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" },
            { name: "Resistências Tubulares", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" },
            { name: "Para Autoclaves Odontológicas", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" },
            { name: "Para Seladoras Industriais", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" },
            { name: "Para Fornos Industriais", image: "", description: "Resistência elétrica de alta qualidade para diversas aplicações industriais" }
        ],
        toggles: {
            problem: true,
            solution: true,
            products: true,
            testimonials: true,
            guarantee: true,
            faq: true
        }
    };

    let siteData = { ...defaultData };

    // Carregar dados do Firebase
    async function loadData() {
        if (window.firebaseGetDoc) {
            try {
                const docRef = window.firebaseDoc(window.firebaseDB, "config", "siteData");
                const docSnap = await window.firebaseGetDoc(docRef);
                if (docSnap.exists()) {
                    siteData = { ...defaultData, ...docSnap.data() };
                }
            } catch (e) {
                console.error("Erro ao carregar do Firebase:", e);
            }
        }
        applyData();
    }

    function applyData() {
        // Logo
        const logoImg = document.querySelector('.logo-img');
        if (logoImg) logoImg.src = siteData.logoPath || 'assets/logo.png';
        
        const logoText = document.querySelector('.logo');
        if (logoText) {
            const companyName = siteData.companyName || "Power Watts Resistências";
            logoText.innerHTML = `<img src="${siteData.logoPath || 'assets/logo.png'}" alt="Logo" class="logo-img"> ${companyName.replace('Watts', '<span>Watts</span>')}`;
        }

        // Company Info
        const footerTitle = document.querySelector('footer h3');
        if (footerTitle) footerTitle.textContent = siteData.companyName;

        const cnpjBadge = document.querySelector('.cnpj-badge');
        if (cnpjBadge) cnpjBadge.textContent = `CNPJ: ${siteData.cnpj}`;

        const footerAddress = document.getElementById('footer-address');
        if (footerAddress) footerAddress.innerHTML = siteData.address.replace(/\n/g, '<br>');

        const footerPhone = document.getElementById('footer-phone');
        if (footerPhone) footerPhone.textContent = siteData.phone;

        // Hero
        const heroMainTitle = document.getElementById('hero-main-title');
        if (heroMainTitle) heroMainTitle.textContent = siteData.heroTitle;

        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = siteData.heroSubtitle;

        const benefitsContainer = document.getElementById('hero-benefits');
        if (benefitsContainer && siteData.heroBenefits) {
            const list = siteData.heroBenefits.split('\n');
            benefitsContainer.innerHTML = list.map(b => `<div class="benefit-item">✔ ${b.trim()}</div>`).join('');
        }

        // Proof
        const proofYears = document.getElementById('proof-years');
        const proofProducts = document.getElementById('proof-products');
        const proofLocation = document.getElementById('proof-location');
        if (proofYears) proofYears.textContent = siteData.proofYears;
        if (proofProducts) proofProducts.textContent = siteData.proofProducts;
        if (proofLocation) proofLocation.textContent = siteData.proofLocation;

        // CTA
        const ctaMainTitle = document.getElementById('cta-main-title');
        const ctaSubtitle = document.getElementById('cta-subtitle');
        const urgencyText = document.getElementById('urgency-text');
        if (ctaMainTitle) ctaMainTitle.textContent = siteData.ctaTitle;
        if (ctaSubtitle) ctaSubtitle.textContent = siteData.ctaSubtitle;
        if (urgencyText) urgencyText.textContent = siteData.urgencyText;

        // Counters
        const yearsCounter = document.getElementById('years-counter');
        const clientsCounter = document.getElementById('clients-counter');
        const productsCounter = document.getElementById('products-counter');
        if (yearsCounter) yearsCounter.textContent = siteData.yearsCounter.toLocaleString('pt-BR');
        if (clientsCounter) clientsCounter.textContent = siteData.clientsCounter.toLocaleString('pt-BR');
        if (productsCounter) productsCounter.textContent = siteData.productsCounter.toLocaleString('pt-BR');

        // Footer
        const footerDesc = document.getElementById('footer-description');
        const copyrightText = document.getElementById('copyright-text');
        if (footerDesc) footerDesc.textContent = siteData.footerDesc;
        if (copyrightText) copyrightText.innerHTML = siteData.copyright.replace(/\n/g, '<br>');

        // Links
        const whatsappLink = `https://wa.me/55${siteData.whatsapp.replace(/\D/g, '')}`;
        document.querySelectorAll('#hero-whatsapp-btn, #cta-whatsapp-btn, #floating-whatsapp, #footer-whatsapp').forEach(el => {
            if(el.tagName === 'A') el.href = whatsappLink;
        });

        const footerWhatsApp = document.getElementById('footer-whatsapp');
        if (footerWhatsApp) footerWhatsApp.innerHTML = `${siteData.phone} (WhatsApp)`;

        document.querySelectorAll('#header-store-link, #footer-store-link').forEach(el => {
            if(el.tagName === 'A') el.href = siteData.storeLink;
        });

        const footerFacebook = document.getElementById('footer-facebook');
        if (footerFacebook) footerFacebook.href = siteData.facebookLink;

        // Buttons
        const heroBtn = document.getElementById('hero-whatsapp-btn');
        const ctaBtn = document.getElementById('cta-whatsapp-btn');
        if (heroBtn) heroBtn.textContent = siteData.heroBtnText;
        if (ctaBtn) ctaBtn.textContent = siteData.ctaBtnText;

        // Colors
        document.documentElement.style.setProperty('--primary-dark-blue', siteData.primaryColor);
        document.documentElement.style.setProperty('--accent-orange', siteData.accentColor);
        document.documentElement.style.setProperty('--whatsapp-green', siteData.whatsappColor);

        // Products
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid && siteData.products) {
            productsGrid.innerHTML = siteData.products.map((p, i) => {
                const delayClass = i < 6 ? `delay-${i}` : '';
                const icons = ['🔧','🔥','⚙️','🏥','📦','🏭','⚡','💡','🔌','🌡️'];
                const imgHtml = p.image ? `<img src="${p.image}" alt="${p.name}" class="product-card-img">` : `<div class="product-icon">${icons[i % icons.length]}</div>`;
                return `
                    <div class="product-card animate ${delayClass}">
                        ${imgHtml}
                        <h3 class="product-title">${p.name}</h3>
                        <p>${p.description || 'Resistência elétrica de alta qualidade para diversas aplicações industriais'}</p>
                    </div>
                `;
            }).join('');
        }

        // Toggles
        const togglesMap = {
            problem: 'problema',
            solution: 'solucao',
            products: 'produtos',
            testimonials: 'depoimentos',
            guarantee: 'garantia',
            faq: 'faq'
        };
        for (const [key, id] of Object.entries(togglesMap)) {
            const section = document.getElementById(id);
            if (section) {
                const target = (key === 'testimonials' || key === 'guarantee') ? section.closest('.section') : section;
                if (target) target.style.display = siteData.toggles[key] ? 'block' : 'none';
            }
        }
    }

    // Carregar dados iniciais
    await loadData();

    // ====== ADMIN PANEL LOGIC ======
    const adminAccess = document.getElementById('admin-access');
    const adminPanel = document.getElementById('admin-panel');
    const closeAdmin = document.getElementById('close-admin');
    const adminPassword = document.getElementById('admin-password');
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminLoginScreen = document.getElementById('admin-login-screen');
    const adminFormScreen = document.getElementById('admin-form-screen');
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');
    const saveChangesBtn = document.getElementById('save-changes');
    const cancelChangesBtn = document.getElementById('cancel-changes');
    const resetDefaultsBtn = document.getElementById('reset-defaults');
    const addProductBtn = document.getElementById('add-product-btn');
    const adminProductsList = document.getElementById('admin-products-list');

    function createProductItem(name = '', image = '', description = '') {
        const div = document.createElement('div');
        div.className = 'admin-product-item';
        div.innerHTML = `
            <button type="button" class="remove-product">&times;</button>
            <div class="admin-product-row">
                <div class="form-group">
                    <label>Nome do Produto</label>
                    <input type="text" class="product-name" value="${name}" placeholder="Ex: Resistência de Mica">
                </div>
            </div>
            <div class="admin-product-row">
                <div class="form-group">
                    <label>Caminho da Imagem</label>
                    <input type="text" class="product-image" value="${image}" placeholder="Ex: assets/03.png ou imagem/mica.png">
                </div>
            </div>
            <div class="admin-product-row">
                <div class="form-group">
                    <label>Descrição do Produto</label>
                    <textarea class="product-description" placeholder="Ex: Resistência elétrica de alta qualidade para diversas aplicações industriais"></textarea>
                </div>
            </div>
        `;
        div.querySelector('.product-description').value = description;
        div.querySelector('.remove-product').addEventListener('click', () => div.remove());
        return div;
    }

    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            adminProductsList.appendChild(createProductItem());
        });
    }

    if (adminAccess && adminPanel) {
        adminAccess.addEventListener('click', () => {
            adminPanel.style.display = 'flex';
            adminLoginScreen.style.display = 'block';
            adminFormScreen.style.display = 'none';
            if (adminPassword) adminPassword.value = '';
        });

        if (closeAdmin) closeAdmin.addEventListener('click', () => adminPanel.style.display = 'none');
        
        adminLoginBtn.addEventListener('click', () => {
            if(adminPassword.value === 'admin123') {
                adminLoginScreen.style.display = 'none';
                adminFormScreen.style.display = 'block';
                fillAdminForm();
            } else {
                alert('Senha incorreta!');
            }
        });

        adminTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                adminTabs.forEach(t => t.classList.remove('active'));
                adminTabContents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
            });
        });

        function fillAdminForm() {
            document.getElementById('admin-company-name').value = siteData.companyName;
            document.getElementById('admin-cnpj').value = siteData.cnpj;
            document.getElementById('admin-address').value = siteData.address;
            document.getElementById('admin-phone').value = siteData.phone;
            document.getElementById('admin-whatsapp-number').value = siteData.whatsapp;
            document.getElementById('admin-hero-title').value = siteData.heroTitle;
            document.getElementById('admin-hero-subtitle').value = siteData.heroSubtitle;
            document.getElementById('admin-hero-benefits').value = siteData.heroBenefits;
            document.getElementById('admin-proof-years').value = siteData.proofYears;
            document.getElementById('admin-proof-products').value = siteData.proofProducts;
            document.getElementById('admin-proof-location').value = siteData.proofLocation;
            document.getElementById('admin-cta-title').value = siteData.ctaTitle;
            document.getElementById('admin-cta-subtitle').value = siteData.ctaSubtitle;
            document.getElementById('admin-urgency-text').value = siteData.urgencyText;
            document.getElementById('admin-years-counter').value = siteData.yearsCounter;
            document.getElementById('admin-clients-counter').value = siteData.clientsCounter;
            document.getElementById('admin-products-counter').value = siteData.productsCounter;
            document.getElementById('admin-footer-desc').value = siteData.footerDesc;
            document.getElementById('admin-copyright').value = siteData.copyright;
            document.getElementById('admin-store-link').value = siteData.storeLink;
            document.getElementById('admin-facebook-link').value = siteData.facebookLink;
            document.getElementById('admin-hero-btn-text').value = siteData.heroBtnText;
            document.getElementById('admin-cta-btn-text').value = siteData.ctaBtnText;
            document.getElementById('admin-primary-color').value = siteData.primaryColor;
            document.getElementById('admin-accent-color').value = siteData.accentColor;
            document.getElementById('admin-whatsapp-color').value = siteData.whatsappColor;
            document.getElementById('admin-logo-path').value = siteData.logoPath;
            
            // Preencher produtos
            adminProductsList.innerHTML = '';
            siteData.products.forEach(p => {
                adminProductsList.appendChild(createProductItem(p.name, p.image, p.description || ''));
            });

            for (const key in siteData.toggles) {
                const checkbox = document.getElementById(`toggle-${key}`);
                if (checkbox) checkbox.checked = siteData.toggles[key];
            }
        }

        saveChangesBtn.addEventListener('click', async () => {
            // Coletar produtos da lista organizada
            const newProducts = [];
            adminProductsList.querySelectorAll('.admin-product-item').forEach(item => {
                const name = item.querySelector('.product-name').value.trim();
                const image = item.querySelector('.product-image').value.trim();
                const description = item.querySelector('.product-description').value.trim();
                if (name) {
                    newProducts.push({ name, image, description });
                }
            });

            const newData = {
                companyName: document.getElementById('admin-company-name').value,
                cnpj: document.getElementById('admin-cnpj').value,
                address: document.getElementById('admin-address').value,
                phone: document.getElementById('admin-phone').value,
                whatsapp: document.getElementById('admin-whatsapp-number').value,
                heroTitle: document.getElementById('admin-hero-title').value,
                heroSubtitle: document.getElementById('admin-hero-subtitle').value,
                heroBenefits: document.getElementById('admin-hero-benefits').value,
                proofYears: document.getElementById('admin-proof-years').value,
                proofProducts: document.getElementById('admin-proof-products').value,
                proofLocation: document.getElementById('admin-proof-location').value,
                ctaTitle: document.getElementById('admin-cta-title').value,
                ctaSubtitle: document.getElementById('admin-cta-subtitle').value,
                urgencyText: document.getElementById('admin-urgency-text').value,
                yearsCounter: parseInt(document.getElementById('admin-years-counter').value),
                clientsCounter: parseInt(document.getElementById('admin-clients-counter').value),
                productsCounter: parseInt(document.getElementById('admin-products-counter').value),
                footerDesc: document.getElementById('admin-footer-desc').value,
                copyright: document.getElementById('admin-copyright').value,
                storeLink: document.getElementById('admin-store-link').value,
                facebookLink: document.getElementById('admin-facebook-link').value,
                heroBtnText: document.getElementById('admin-hero-btn-text').value,
                ctaBtnText: document.getElementById('admin-cta-btn-text').value,
                primaryColor: document.getElementById('admin-primary-color').value,
                accentColor: document.getElementById('admin-accent-color').value,
                whatsappColor: document.getElementById('admin-whatsapp-color').value,
                logoPath: document.getElementById('admin-logo-path').value,
                products: newProducts,
                toggles: {
                    problem: document.getElementById('toggle-problem').checked,
                    solution: document.getElementById('toggle-solution').checked,
                    products: document.getElementById('toggle-products').checked,
                    testimonials: document.getElementById('toggle-testimonials').checked,
                    guarantee: document.getElementById('toggle-guarantee').checked,
                    faq: document.getElementById('toggle-faq').checked
                }
            };

            if (window.firebaseSetDoc) {
                try {
                    console.log("Tentando salvar dados no Firebase...", newData);
                    const docRef = window.firebaseDoc(window.firebaseDB, "config", "siteData");
                    await window.firebaseSetDoc(docRef, newData);
                    siteData = newData;
                    applyData();
                    alert('Alterações salvas com sucesso no Firebase!');
                    adminPanel.style.display = 'none';
                } catch (e) {
                    console.error("Erro detalhado ao salvar no Firebase:", e);
                    let errorMsg = "Erro ao salvar no Firebase.";
                    if (e.code === 'permission-denied') {
                        errorMsg += "\n\nMotivo: Permissão negada. Você precisa liberar as 'Rules' (Regras) do Firestore no console do Firebase.";
                    } else {
                        errorMsg += "\n\nCódigo: " + (e.code || 'desconhecido') + "\nMensagem: " + e.message;
                    }
                    alert(errorMsg);
                }
            }
        });

        cancelChangesBtn.addEventListener('click', () => adminPanel.style.display = 'none');
        resetDefaultsBtn.addEventListener('click', () => {
            if(confirm('Resetar para padrões?')) {
                siteData = { ...defaultData };
                applyData();
                fillAdminForm();
            }
        });
    }

    // ====== OUTRAS FUNCIONALIDADES ======
    // Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // FAQ
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
    });

    // Smooth Scroll
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });
});
