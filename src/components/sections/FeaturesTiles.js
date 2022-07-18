import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Magyarországon Készült',
    paragraph: 'Gyártási folyamata egyedülálló, a termék teljesítménye pedig szembetűnő kontrasztjellemzőkkel rendelkezik a hagyományos ablakmembránokhoz képest.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Nincs összetett gumi minta
                  </h4>
                  <p className="m-0 text-sm">
                      Az új NanoPrö sorozatú autóipari fóliák gyártása során nem szükséges a hagyományos bevonóanyag-ragasztó eljárás alkalmazása, mert nincs összetett ragasztó, nem lesznek a rálátást befolyásoló ragasztóvonalak.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Nincs tükör tükröződés
                  </h4>
                  <p className="m-0 text-sm">
                    Az új NanoPrö sorozatú autófólia ultrafinom ritka anyag diszperziós technológiát alkalmaz a PET alapfóliába, amely egy háromdimenziós feldolgozási technológia, így a termék magas hőszigetelő képességgel rendelkezik, és nem okoz fémvisszaverődést (nem tükröződik) .
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                     A hőszigetelési teljesítmény továbbra is stabil 
                  </h4>
                  <p className="m-0 text-sm">
                   Az új NanoPrö sorozatú autófóliák ultrafinom ritka anyagok diszperziós technológiáját alkalmazzák a PET-alapfóliába anélkül, hogy közvetlenül érintkeznének savakkal és lúgokkal, és az anyag tulajdonságait nem könnyű megváltoztatni. Az ezzel az alapfóliával készült autóipari fóliatermékek hőszigetelési teljesítménye továbbra is stabil, az IRR adatok elérik a 99%-ot.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Nincs oxidáció, nincsenek fekete vagy fehér élek
                  </h4>
                  <p className="m-0 text-sm">
                  Nem oxidálódik, nincsenek fekete vagy fehér élek, A vadonatúj NanoPrö sorozatú autófólia hőszigetelő anyaga PET fólia alapanyagba van csomagolva, levegővel és vízgőzzel való érintkezés nélkül nem oxidálódik, így nem lesz fekete vagy fehér élek.  
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Garancia
                  </h4>
                  <p className="m-0 text-sm">
                    A NanoPrö sorozatot életre szóló garanciával támogatjuk, így magabiztosan vezethet.
                  </p>
                </div>
              </div>
            </div>            

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;