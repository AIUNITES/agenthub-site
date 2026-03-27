// AgentHub - Interactive Demo Terminal
document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');
  const input = document.getElementById('demo-input');
  const demoButtons = document.querySelectorAll('.demo-btn');

  // Sample data for demo responses
  const sampleLeads = {
    restaurants: [
      { name: "Tony's Tacos", address: "1234 Main St, Tulsa OK", phone: "(918) 555-0123", hasWebsite: false },
      { name: "Golden Dragon", address: "567 Cherry Ave, Tulsa OK", phone: "(918) 555-0456", hasWebsite: false },
      { name: "Mama's Kitchen", address: "890 Oak Blvd, Tulsa OK", phone: "(918) 555-0789", hasWebsite: false },
      { name: "The Burger Joint", address: "234 Elm St, Tulsa OK", phone: "(918) 555-1012", hasWebsite: false },
      { name: "Pho Paradise", address: "678 Pine Rd, Tulsa OK", phone: "(918) 555-1345", hasWebsite: false },
    ],
    plumbers: [
      { name: "Quick Fix Plumbing", address: "111 Industrial Way, OKC", phone: "(405) 555-2001", hasWebsite: false },
      { name: "Pro Pipe Services", address: "222 Commerce Dr, OKC", phone: "(405) 555-2002", hasWebsite: false },
      { name: "AAA Drain Masters", address: "333 Business Park, OKC", phone: "(405) 555-2003", hasWebsite: false },
      { name: "Emergency Plumbers 24/7", address: "444 Service Rd, OKC", phone: "(405) 555-2004", hasWebsite: false },
    ],
    retail: [
      { name: "Vintage Treasures", address: "100 Retail Row, Dallas TX", type: "Antiques", hasEcom: false },
      { name: "Kids Corner Toys", address: "200 Shopping Plaza, Dallas TX", type: "Toys", hasEcom: false },
      { name: "Green Thumb Garden", address: "300 Market St, Dallas TX", type: "Garden", hasEcom: false },
      { name: "Fashion Forward Boutique", address: "400 Style Ave, Dallas TX", type: "Clothing", hasEcom: false },
      { name: "Tech Gadgets Plus", address: "500 Electronics Blvd, Dallas TX", type: "Electronics", hasEcom: false },
    ]
  };

  // Add line to terminal
  function addLine(text, type = 'output') {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="prompt">agent@hub:~$</span><span class="${type}">${text}</span>`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  // Type effect
  async function typeText(text, type = 'output', delay = 20) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="prompt">agent@hub:~$</span><span class="${type}"></span>`;
    terminal.appendChild(line);
    
    const span = line.querySelector(`.${type}`);
    for (let char of text) {
      span.textContent += char;
      terminal.scrollTop = terminal.scrollHeight;
      await new Promise(r => setTimeout(r, delay));
    }
  }

  // Process command
  async function processCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    addLine(cmd, 'command');
    
    // Help command
    if (command === 'help') {
      await typeText('Available commands:', 'output', 10);
      await typeText('  find [business type] in [location] without website', 'output', 10);
      await typeText('  find retail stores without ecommerce in [location]', 'output', 10);
      await typeText('  build website for [business name] [location]', 'output', 10);
      await typeText('  create marketing email for [service]', 'output', 10);
      await typeText('  clear - Clear terminal', 'output', 10);
      return;
    }

    // Clear command
    if (command === 'clear') {
      terminal.innerHTML = '';
      addLine('Terminal cleared', 'success');
      return;
    }

    // Find restaurants
    if (command.includes('restaurants') && command.includes('tulsa')) {
      await typeText('🔍 LeadFinder Agent activated...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('Scanning Google Maps for restaurants in Tulsa, OK...', 'output', 15);
      await new Promise(r => setTimeout(r, 800));
      await typeText('Checking for website presence...', 'output', 15);
      await new Promise(r => setTimeout(r, 600));
      await typeText('', 'output');
      await typeText('✅ Found 5 restaurants WITHOUT websites:', 'success', 10);
      await typeText('', 'output');
      
      for (let lead of sampleLeads.restaurants) {
        await typeText(`📍 ${lead.name}`, 'output', 10);
        await typeText(`   Address: ${lead.address}`, 'output', 10);
        await typeText(`   Phone: ${lead.phone}`, 'output', 10);
        await typeText(`   Website: ❌ None detected`, 'output', 10);
        await typeText('', 'output');
        await new Promise(r => setTimeout(r, 200));
      }
      
      await typeText('📊 Export options: CSV, JSON, CRM Integration', 'success', 10);
      return;
    }

    // Find plumbers
    if (command.includes('plumber') && (command.includes('oklahoma') || command.includes('okc'))) {
      await typeText('🔍 LeadFinder Agent activated...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('Scanning directories for plumbers in Oklahoma City...', 'output', 15);
      await new Promise(r => setTimeout(r, 800));
      await typeText('Cross-referencing with domain registries...', 'output', 15);
      await new Promise(r => setTimeout(r, 600));
      await typeText('', 'output');
      await typeText('✅ Found 4 plumbing businesses WITHOUT websites:', 'success', 10);
      await typeText('', 'output');
      
      for (let lead of sampleLeads.plumbers) {
        await typeText(`🔧 ${lead.name}`, 'output', 10);
        await typeText(`   Address: ${lead.address}`, 'output', 10);
        await typeText(`   Phone: ${lead.phone}`, 'output', 10);
        await typeText(`   Website: ❌ None detected`, 'output', 10);
        await typeText('', 'output');
        await new Promise(r => setTimeout(r, 200));
      }
      
      await typeText('💡 Tip: These are prime candidates for your web design services!', 'success', 10);
      return;
    }

    // Find retail stores without ecommerce
    if (command.includes('retail') && command.includes('ecommerce') && command.includes('dallas')) {
      await typeText('🛒 E-ComScout Agent activated...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('Scanning retail listings in Dallas, TX...', 'output', 15);
      await new Promise(r => setTimeout(r, 800));
      await typeText('Analyzing websites for shopping cart functionality...', 'output', 15);
      await new Promise(r => setTimeout(r, 600));
      await typeText('', 'output');
      await typeText('✅ Found 5 retail stores WITHOUT e-commerce:', 'success', 10);
      await typeText('', 'output');
      
      for (let store of sampleLeads.retail) {
        await typeText(`🏪 ${store.name}`, 'output', 10);
        await typeText(`   Type: ${store.type}`, 'output', 10);
        await typeText(`   Address: ${store.address}`, 'output', 10);
        await typeText(`   Online Store: ❌ Not detected`, 'output', 10);
        await typeText(`   Opportunity: 💰 High - Products can be sold online`, 'output', 10);
        await typeText('', 'output');
        await new Promise(r => setTimeout(r, 200));
      }
      
      await typeText('💡 These businesses are leaving money on the table without e-commerce!', 'success', 10);
      return;
    }

    // Build website
    if (command.includes('build website')) {
      await typeText('🌐 SiteBuilder Agent activated...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('Analyzing business requirements...', 'output', 15);
      await new Promise(r => setTimeout(r, 400));
      await typeText('Generating industry-specific content...', 'output', 15);
      await new Promise(r => setTimeout(r, 600));
      await typeText('Creating responsive layout...', 'output', 15);
      await new Promise(r => setTimeout(r, 400));
      await typeText('Optimizing for SEO...', 'output', 15);
      await new Promise(r => setTimeout(r, 400));
      await typeText('Selecting professional images...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('', 'output');
      await typeText('✅ Website generated successfully!', 'success', 10);
      await typeText('', 'output');
      await typeText('📄 Pages created:', 'output', 10);
      await typeText('   • Home (hero, services, testimonials, CTA)', 'output', 10);
      await typeText('   • About Us', 'output', 10);
      await typeText('   • Services', 'output', 10);
      await typeText('   • Contact (with form)', 'output', 10);
      await typeText('', 'output');
      await typeText('🎨 Features included:', 'output', 10);
      await typeText('   • Mobile responsive design', 'output', 10);
      await typeText('   • SEO meta tags', 'output', 10);
      await typeText('   • Google Maps integration', 'output', 10);
      await typeText('   • Contact form', 'output', 10);
      await typeText('   • Social media links', 'output', 10);
      await typeText('', 'output');
      await typeText('🚀 Ready to deploy! Use "deploy" command to publish.', 'success', 10);
      return;
    }

    // Marketing email
    if (command.includes('marketing email') || command.includes('create marketing')) {
      await typeText('📈 Marketer Agent activated...', 'output', 15);
      await new Promise(r => setTimeout(r, 500));
      await typeText('Analyzing target audience...', 'output', 15);
      await new Promise(r => setTimeout(r, 400));
      await typeText('Crafting compelling copy...', 'output', 15);
      await new Promise(r => setTimeout(r, 600));
      await typeText('', 'output');
      await typeText('✅ Marketing email generated:', 'success', 10);
      await typeText('', 'output');
      await typeText('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'output', 5);
      await typeText('Subject: Is Your Business Invisible Online? 🔍', 'output', 15);
      await typeText('', 'output');
      await typeText('Hi [Business Owner],', 'output', 15);
      await typeText('', 'output');
      await typeText('I noticed [Business Name] doesn\'t have a website yet.', 'output', 15);
      await typeText('', 'output');
      await typeText('Did you know that 97% of consumers search online', 'output', 15);
      await typeText('before visiting a local business?', 'output', 15);
      await typeText('', 'output');
      await typeText('Without a website, you\'re missing out on customers', 'output', 15);
      await typeText('who are actively looking for your services.', 'output', 15);
      await typeText('', 'output');
      await typeText('I can build you a professional website in just', 'output', 15);
      await typeText('48 hours - no hassle, no technical knowledge needed.', 'output', 15);
      await typeText('', 'output');
      await typeText('Reply to this email for a free mockup of your site!', 'output', 15);
      await typeText('', 'output');
      await typeText('Best,', 'output', 15);
      await typeText('[Your Name]', 'output', 15);
      await typeText('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'output', 5);
      await typeText('', 'output');
      await typeText('📊 Predicted open rate: 32% | Click rate: 8%', 'success', 10);
      return;
    }

    // Unknown command
    await typeText(`Command not recognized: "${cmd}"`, 'error', 10);
    await typeText('Type "help" for available commands', 'output', 10);
  }

  // Event listeners
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      processCommand(input.value);
      input.value = '';
    }
  });

  demoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      processCommand(cmd);
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
