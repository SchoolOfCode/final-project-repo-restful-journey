import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegSnowflake } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { GiFallingLeaf } from "react-icons/gi";
import css from "../Timeline/timeline.module.css";

function Timeline({ cssSeason }) {
  return (
    <div className={css.timeline}>
      <div className={css.container}>
        <h1
          className={css[`seasonalCalendar${cssSeason}`]}
          style={{ fontSize: "1.5rem" }}
        >
          - Seasonal Calendar -
        </h1>
        <h3> A handy guide to help you eat seasonally year-round.</h3>
      </div>
      <VerticalTimeline className={css.verticalTimeline}>
        <VerticalTimelineElement
          icon={<FaRegSnowflake />}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- January -</h1>
            <p className={css.produce}>
              Apple, Beetroot, Brussels Sprouts, Cauliflower, Celeriac, Celery,
              Chicory, Horseradish, Jerusalem Artichoke, Kale, Kohlrabi, Leeks,
              Parsnips, Pear, Potatoes, Rhubarb, Salsify, Shallots, Swede,
              Turnips
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaRegSnowflake />}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>- February -</h1>
          <p className={css.produce}>
            Brussel Sprouts, Cauliflower, Beetroot, Celeriac, Chicory, Jerusalem
            Artichoke, Kale, Kohlrabi, Leeks, Parsnips, Potatoes, Purple
            Sprouting Broccoli, Rhubarb, Salsify, Shallots, Swede, Turnips
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaSeedling />}
          iconStyle={{ background: "#88E375", color: "#fff" }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>- March -</h1>
          <p className={css.produce}>
            Cauliflower, Kale, Leeks, Purple Sprouting Broccoli, Rhubarb,
            Salsify, Spinach, Spring onions, Swede, Wild Nettles, Wild Garlic
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaSeedling />}
          iconStyle={{ background: "#88E375", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- April -</h1>
            <p className={css.produce}>
              Asparagus, Basil, Broccoli, Chives, Dill, Jersey Royal New
              Potatoes, Lettuce & Salad Leaves, New Potatoes, Purple Sprouting
              Broccoli, Radishes, Rhubarb, Rocket, Samphire, Sorrel, Spinach,
              Spring Onions, Watercress, Wild Nettles, Wild Garlic
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaSeedling />}
          iconStyle={{ background: "#88E375", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- May -</h1>
            <p className={css.produce}>
              Asparagus, Basil, Broccoli, Carrots, Chervil, Chives, Coriander,
              Dill, Jersey Royal and New Potatoes, Lettuce and Salad Leaves,
              Mint, Nasturtium, New Potatoes, Parsley, Oregano, Peas, Radishes,
              Rhubarb, Rocket, Rosemary, Sage, Samphire, Sorrel, Spinach, Spring
              Onions, Tarragon, Watercress, Wild Nettles, Wild Garlic
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<BsSun />}
          iconStyle={{ background: "#FFED74", color: "black" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- June -</h1>
            <p className={css.produce}>
              Artichoke, Asparagus, Aubergine, Basil, Beetroot, Bilberries,
              Blueberries, Broad Beans, Broccoli, Carrots, Chard, Cherries,
              Chervil, Chillies, Chives, Coriander, Courgettes, Dill,
              Elderflowers, Fennel, French Beans, Garlic, Gooseberries,
              Greengages, Jersey Royal New Potatoes, Kohlrabi, Lettuce & Salad
              Leaves, Mangetout, Mint, Nasturtium, New Potatoes, Onions,
              Oregano, Pak Choi, Parsley, Peas, Radishes, Rocket, Rosemary,
              Runner Beans, Sage, Samphire, Sorrel, Spinach, Spring Onions,
              Strawberries, Tarragon, Thyme, Tomatoes, Turnips, Watercress, Wild
              Nettles
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<BsSun />}
          iconStyle={{ background: "#FFED74", color: "black" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- July -</h1>
            <p className={css.produce}>
              Artichoke, Aubergine, Basil, Beetroot, Bilberries, Blackcurrants,
              Blueberries, Broad Beans, Broccoli, Carrots, Chard, Chervil,
              Chillies, Cherries, Chives, Coriander, Courgettes, Dill,
              Elderflower, Fennel, French Beans, Garlic, Gooseberries,
              Greengages, Jersey Royal New Potatoes, Kohlrabi, Lettuce & Salad
              Leaves, Mangetout, Mint, Nasturtium, New Potatoes, Onions,
              Oregano, Pak Choi, Parsley, Peas, Radishes, Rocket, Rosemary,
              Runner Beans, Sage, Samphire, Shallots, Sorrel, Spinach, Spring
              Onions, Strawberries, Tarragon, Thyme, Tomatoes, Turnips,
              Watercress, Wild Nettles{" "}
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<BsSun />}
          iconStyle={{ background: "#FFED74", color: "black" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- August -</h1>
            <p className={css.produce}>
              Artichoke, Aubergine, Basil, Beetroot, Bilberries, Blueberries,
              Broad Beans, Broccoli, Carrots, Chard, Cherries, Chillies, Chives,
              Coriander, Courgettes, Cucumber, Damsons, Fennel, Greengages,
              French Beans, Garlic, Kohlrabi, Lettuce, Loganberries, Mangetout,
              Marrow, Mint, Onions, Oregano, Pak Choi, Parsley, Peas, Peppers,
              Plums, Potatoes (maincrop), Radishes, Raspberries, Redcurrants,
              Rocket, Rosemary, Runner Beans, Sage, Shallots, Sorrel, Spring
              Onions, Strawberries, Sweetcorn, Tarragon, Thyme, Tomatoes,
              Turnips, Watercress, Wild Mushrooms
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<GiFallingLeaf />}
          iconStyle={{ background: "#b7410e", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- September -</h1>
            <p className={css.produce}>
              Apples, Artichoke, Aubergine, Beetroot, Bilberries, Blackberries,
              Broccoli, Butternut Squash, Carrots, Celeriac, Celery, Chard,
              Chestnuts, Chillies, Chives, Cob Nuts, Coriander, Courgettes,
              Cucumber, Damsons, Elderberries, Fennel, French Beans, Garlic,
              Horseradish, Kale, Kohlrabi, Leeks, Lettuce & Salad Leaves,
              Mangetout, Marrow, Mint, Onions, Oregano, Pak Choi, Parsley,
              Pears, Peppers, Plums, Potatoes, Pumpkin, Radishes, Raspberries,
              Redcurrants, Rocket, Rosemary, Runner Beans, Sage, Shallots,
              Sorrel, Spring Onions, Sweetcorn, Thyme, Tomatoes, Turnips,
              Watercress, Wild Mushrooms
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<GiFallingLeaf />}
          iconStyle={{ background: "#b7410e", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- October -</h1>
            <p className={css.produce}>
              Apples, Artichoke, Beetroot, Bilberries, Blackberries, Broccoli,
              Butternut Squash, Celeriac, Celery, Chestnuts, Chicory, Chives,
              Chillies, Cob Nuts, Elderberries, Fennel, Garlic, Horseradish,
              Jerusalem Artichoke, Kale, Kohlrabi, Leeks, Lettuce, Marrow,
              Medlar, Parsley, Parsnips, Pears, Potatoes, Pumpkin, Quince,
              Radishes, Rocket, Rosemary, Runner Beans, Sage, Salsify, Shallots,
              Sorrel, Squashes, Swede, Sweetcorn, Thyme, Tomatoes, Turnips,
              Watercress, Wild Mushrooms
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<GiFallingLeaf />}
          iconStyle={{ background: "#b7410e", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- November -</h1>
            <p className={css.produce}>
              Apples, Artichoke, Beetroot, Butternut Squash, Cauliflower,
              Celeriac, Celery, Chestnuts, Chicory, Cob Nuts, Horseradish,
              Jerusalem Artichoke, Kale, Kohlrabi, Leeks, Parsnips, Pears,
              Potatoes, Pumpkin, Quince, Rosemary, Sage, Salsify, Shallots,
              Swede, Turnips, Watercress, Wild Mushrooms
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FaRegSnowflake />}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div style={{ width: "70vw" }}>
            <h1 style={{ fontSize: "1.5rem" }}>- December -</h1>
            <p className={css.produce}>
              Apples, Beetroot, Brussels Sprouts, Cauliflower, Celeriac, Celery,
              Chestnuts, Chicory, Horseradish, Jerusalem Artichoke, Kale,
              kohlrabi, Leeks, Parsnips, Pears, Potatoes, Salsify, Shallots,
              Swede, Turnips, Wild Mushrooms
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
