import DefaultLayout from '../src/layouts/default'
import PortfolioItem from '../src/components/Portfolio/PortfolioItem'

export default function Home() {
  return (
        <DefaultLayout>

            <div className="pb-10">
                <div className="pt-20 w-4/5 mx-auto text-center">
                    <p className="text-4xl text-gray-500 font-semibold">Portfolio</p>
                    <p className="text-xl">These are some of the projects that I've worked on that are worth mentioning.</p>
                </div>

                <PortfolioItem 
                    title="Postbox Management"
                    roles="Fullstack Developer, DevOps, Product Manager"
                    content="This application was developed for a postbox company in 
                    Stockholm. Their system was becoming outdated and did 
                    not meet the standards that they wanted. I did everything
                    from systems design, implementation, testing and hosting.
                    Up untill this day, I am still managing this application on a 
                    day to day basis. The system includes functionalities like automatic invoice generation, payment integration
                    via Stripe and MyPos, admin panel and customer panel."
                    languages={[
                        'laravel',
                        'bootstrap',
                        'javascript',
                        'mysql',
                        'ubuntu',
                        'php',
                        'stripe'
                    ]}
                    images={[
                        '/portfolio/postbox/dashboard.png',
                        '/portfolio/postbox/customer.jpg',
                        '/portfolio/postbox/invoices.jpg',
                        '/portfolio/postbox/transactions.jpg'
                    ]}
                />

                <PortfolioItem 
                    title="World of Esportz"
                    roles="Fullstack Developer, Hosting, support "
                    content="World of Esportz is a web-based csgo betting game that I was part of creating for a startup. Initially I was the only developer on the team,
                    but as the size of the applicaiton increased, we hired more developers. I went from Fullstack developer to Frontend once we got a senior backend
                    developer in place. During this project I worked mostly with Espress.js and Bootstrap, but was also responsible for hosting and support. I resigned as developer
                    in the beginning of march due to studies, but continued to be responsible for hosting and support."
                    languages={[
                        'express',
                        'bootstrap',
                        'javascript',
                        'mysql',
                        'ubuntu'
                    ]}
                    images={[
                        '/portfolio/woe/landing.png',
                        '/portfolio/woe/register.png',
                        '/portfolio/woe/login.png',
                        '/portfolio/woe/game.png',
                        '/portfolio/woe/dashboard.png',
                        '/portfolio/woe/admin.png',
                        '/portfolio/woe/mail.png',
                        '/portfolio/woe/refferal.png',
                    ]}
                />

                <PortfolioItem 
                    title="Verdenum Hosting"
                    roles="Fullstack Developer, Product Owner"
                    content="Verdenum was a hosting solution that I developed for my own company. It was built using WHMCS, Stripe and was hosted on a VPS. My goal
                    was to create a hosting solution that guaranteed green hosting by only using services that was based on renewable energy.
                    However, the project never launched due to lack of time. However, during this project, I learned a lot about hosting and server management. Who knows, 
                    maybe one day I will be able to launch this product."
                    languages={[
                        'php',
                        'stripe',
                        'whmcs',
                        'bootstrap',
                        'javascript',
                        'mysql',
                        'ubuntu'
                    ]}
                    images={[
                        '/portfolio/verdenum/landing.png',
                        '/portfolio/verdenum/domain.png',
                        '/portfolio/verdenum/prices.png',
                        '/portfolio/verdenum/cart.png'
                    ]}
                />
            </div>

        </DefaultLayout>
  )
}
