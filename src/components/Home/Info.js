import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our guide"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted">
                            The quality of your coffee beans can make a huge
                            difference in the flavor and aroma of your morning
                            cup. But how do you figure out which beans are the
                            best? We have a list of best coffee beans for you to
                            try, but before we get there, let's talk about the
                            fundamentals of beans and how they're measured,
                            ranked and categorized.
                        </p>
                        <h3 className="font-italic">Type</h3>
                        <ol className="text-muted">
                            <li>
                                Arabica - Also known as "the good stuff,"
                                arabica beans are high-quality beans that are
                                rich in flavor. They have to be grown in
                                specific conditions to reach their fullest
                                potential, and that's why they're so valuable.
                                You'll see a lot of brands slap "100 percent
                                arabica beans" on their labels as an assurance
                                of quality.
                            </li>
                            <li>
                                Robusta - Robusta beans are inferior to arabica
                                beans in terms of flavor, but they also contain
                                more caffeine. Some people are willing to make
                                the trade-off to get their fix. Robusta beans
                                are also much easier to cultivate than arabica,
                                so they're cheaper to buy and sell.
                            </li>
                            <li>
                                Arabica and robusta - Some brands mix their
                                arabica and robusta beans. This is usually done
                                to increase the caffeine content of their coffee
                                without sacrificing its flavor. You might like
                                an arabica and robusta blend if you're
                                interested in finding this balance yourself.
                            </li>
                        </ol>
                        <h3 className="font-italic">Origin</h3>
                        <div className="text-muted">
                            <p>
                                "Single origin" beans come from one specific
                                region like Colombia or Kenya. "Blended origin"
                                beans can come from many different places.
                            </p>
                            <p>
                                Most countries that grow coffee beans have their
                                own mythos surrounding it. For example,
                                Brazilian roasts are known for being dark and
                                heavy; Ethiopian coffees tend to be sweeter and
                                fruitier. If you're looking for a specific
                                flavor profile, you'll probably want to go with
                                single origin beans from your country of choice.
                            </p>
                            <p>
                                On the other hand, if you like unique,
                                complicated flavors, you might prefer blended
                                beans that will swirl together to create a
                                complex roast. Just make sure that you're buying
                                artisan blended roasts and not cheap blended
                                roasts that were thrown together for
                                cost-cutting purposes.
                            </p>
                        </div>

                        <h3 className="font-italic">Acidity</h3>
                        <div className="text-muted">
                            <p>
                                Acidity can refer to two different things in the
                                coffee world. For laymen, it's just a way of
                                describing sharp, tart coffee flavors. For
                                scientists, it's used to describe the coffee's
                                pH content.
                            </p>
                            <p>
                                There's nothing wrong with drinking acidic
                                coffee if your body can handle it. In fact, some
                                people really like the tang of an acidic coffee
                                to wake them up or get them focused.
                            </p>
                            <p>
                                On the flip side, if you suffer from headaches,
                                stomachaches or toothaches after drinking your
                                morning cup of joe, you might want to switch to
                                a low-acid coffee. It's much easier on your
                                body, and it won't damage your teeth enamel or
                                irritate your stomach lining. Just remember that
                                the pH scale goes backwards, so lower pH levels
                                mean higher amounts of acid. This means that a
                                low-acid coffee would actually have a higher pH
                                level than other brands.
                            </p>
                        </div>

                        <h3 className="font-italic">Brewing Method</h3>
                        <ul className="text-muted">
                            <li>
                                Drip method - This is how regular,
                                run-of-the-mill coffeemakers do it. It involves
                                putting coffee grounds into a paper filter and
                                pouring hot water over them. If you're working
                                with whole coffee beans, you'll need to grind
                                them before putting them into the filter.
                            </li>
                            <li>
                                French press - French press coffee involves
                                "pressing" your coffee grounds to the bottom of
                                a container instead of filtering them the
                                traditional way. While you can use any type of
                                bean to make your grounds, there are certain
                                roasts and coarseness levels that work best with
                                a French press, so you'll want to do some
                                research before you start experimenting.
                            </li>
                            <li>
                                Cold brewing - This method involves steeping
                                your beans or grounds in cold water for 12-24
                                hours before roasting. They become much less
                                bitter after the water has drawn out their acids
                                and oils. Many low-acid coffees are made this
                                way.
                            </li>
                            <li>
                                There are many other coffee brewing methods,
                                including specialty methods for things like
                                espressos and Turkish coffee. If you want to use
                                your beans to do something different than the
                                usual drip, you'll need to look into various
                                types of brewing.
                            </li>
                        </ul>

                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                        <Link to="/beans/">
                            <button className="btn text-uppercase btn-yellow ml-2">
                                shop beans
                            </button>
                        </Link>
                        <Link to="/equipment/">
                            <button className="btn text-uppercase btn-yellow ml-2">
                                brewing equipment
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
