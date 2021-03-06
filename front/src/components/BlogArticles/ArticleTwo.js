import React from 'react';
import styles from "./Article.module.css"
import CompClubTwo from './CompClubTwo.jpg'
import { useHistory } from 'react-router'

function ArticleTwo(props) {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <div>
          <h1>Открытие компьютерного клуба</h1>
        </div>
        <div>
        <img src={CompClubTwo} alt="" />
        </div>
        <div>
          <p>Актуальность компьютерных клубов совсем не угасает как могло показаться, напротив, они становятся все популярнее, в особенности среди молодежи.
            Компьютерный клуб нынче это не место со слабыми ПК и шариковыми проводными мышками. Это зона мощных компьютеров, которые включают в себя весь необходимый посетителю функционал. Клиент может как выполнять рабочие задания, так и играть в требовательные игры.
          </p>
          <p><b>Особенности открытия КК и бизнеса в целом</b></p>
          <p>Бизнес-план на открытие компьютерного клуба является неотъемлемой его частью. Он должен включать программу деятельности КК с характеристикой модели в будущем.
            Основная целевая группа компьютерных клубов это молодежь до 22 лет, что находят привлекательным проведение времени в КК в одиночестве либо в компании друзей. Не все имеют средства для обретения собственного мощного ПК, поэтому подобные места будут всегда актуальны.
          </p>
          <p><b>План открытия компьютерного клуба</b></p>
          <ul>
            <li>Местоположение КК играет немаловажную роль в подобном деле. Прекрасным вариантом будет расположение близь центров сосредоточенности целевой аудитории. Это может быть спальный район, центр города, территория возле популярных торговых центров, молодежных спортивных площадок – главное уверенность в том, что там сосредоточена необходимая аудитория. Это легко можно проверить просто посетив эти места и зрительно выяснив какие группы людей находятся там чаще всего.
            </li>
            <li>Как и в любом похожем роде деятельности нужно выполнить оформление необходимой документации и заключения договора аренды.
            </li>
            <li>Также нужно провести ремонтные работы в помещении для создания определенной атмосферы. На этом этапе также следует провести закупку необходимого оборудования, провести скоростной интернета и дать объявление о найме персонала. Для оптимальной работоспособности клуба следует приобрести не менее 20 ПК.
            </li>
            <li>Отличным вариантом будет проведение рекламной компании для привлечения посетителей. Это может быть, как и размещение рекламы в социальных сетях, так и физические объявления с помощью листовок или городских рекламных щитов.
            </li>
            <li>И самое главное. По истечению 1.5-2 месяцев требуется провести полный анализ доходов, посещаемости, цен и прочего. В случае каких-либо проблем следует изменить определенные детали в общей работе КК.
            </li>
          </ul>
          <p><b>Итог</b></p>
          <p>Хоть открытие компьютерного клуба требует терпения, так как реализация такого плана действительно занимает много времени и требует большого количества материальных вложений, его непосредственная деятельность может приносить хорошие доходы при грамотном и правильном подходе.
          </p>
        </div>
        <div className={styles.buttonFlex}>
        <button onClick={() => history.goBack()}>Назад!</button>
        </div>
      </div>
    </div>
  );
}

export default ArticleTwo;
