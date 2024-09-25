import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"

import "../styles.scss"
import Footer from "./footer"
import Seo from "./seo"
import Menu from "./menu"
import Helmet from "react-helmet"

const Layout = ({ location, children, pageContext, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        allMdx {
          edges {
            node {
              frontmatter {
                title
                description
                class
                imageTwitter
                imageOg
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script>
            var _paq = window._paq = window._paq || [];
            _paq.push(["disableCookies"]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() &#123; 
                var u="https://webstats.elixir-europe.org/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '5']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                &#125;)();
          </script>
        </Helmet>
        <Helmet>
        <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://trainingcontent.embl.org/ena-quick-tour",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module European Nucleotide Archive - Quick Tour",
                "keywords": "sequencing data, ena, archive"
                "name": "European Nucleotide Archive - Quick Tour"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://ena-covid19-docs.readthedocs.io/en/latest/submission_workshop/getting_started.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module ENA : SARS-CoV-2 Submission Workshop",
                "keywords": "sequencing data, ena, archive"
                "name": "ENA : SARS-CoV-2 Submission Workshop"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/1JUZEf-syrwy0PlAfQgM20XdUhvzIQQoA/view?usp=share_link",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module WP3 Discoverability hackathon v2 on Feb 8th",
                "keywords": "COVID-19 Data Portal, Knowledge, Molecular biology, Clinical data, Socioeconomic data, EOSC ecosystem, Hackathons, Metadata, FAIRsharing, Social sciences"
                "name": "WP3 Discoverability hackathon v2 on Feb 8th"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/1S-tuAkEIHzfcMZIrdSkFRcCWDJEjkGeS/view?usp=share_link",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Unlocking the Power of Metadata",
                "keywords": "metadata"
                "name": "Unlocking the Power of Metadata"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#nutshell",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing in a nutshell",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing in a nutshell"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#standards",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing content: standards overview",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing content: standards overview"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#databases",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing content: databases overview",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing content: databases overview"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#researchers",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: researchers",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: researchers"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#publishers",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: journal publishers",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: journal publishers"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#funders",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: funders",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: funders"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - A Very Short Introduction to Galaxy",
                "keywords": "Galaxy"
                "name": "GTN Smörgåsbord 2: Tapas - A Very Short Introduction to Galaxy"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Galaxy 101",
                "keywords": "Galaxy 101"
                "name": "GTN Smörgåsbord 2: Tapas - Galaxy 101"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - NGS data logistics",
                "keywords": "Galaxy, NGS"
                "name": "GTN Smörgåsbord 2: Tapas - NGS data logistics"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Quality control",
                "keywords": "Galaxy, Quality control, QC"
                "name": "GTN Smörgåsbord 2: Tapas - Quality control"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Mapping",
                "keywords": "Galaxy, mapping"
                "name": "GTN Smörgåsbord 2: Tapas - Mapping"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Using data collections",
                "keywords": "Galaxy, data collection"
                "name": "GTN Smörgåsbord 2: Tapas - Using data collections"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Removal of human reads from SARS-CoV-2 sequencing data",
                "keywords": "Galaxy, Removal, human reads, SARS-CoV-2 sequencing data"
                "name": "GTN Smörgåsbord 2: Tapas - Removal of human reads from SARS-CoV-2 sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - SARS-CoV-2 Monitoring and Analysis with Galaxy",
                "keywords": "SARS-CoV-2, Monitoring, Analysis, Galaxy"
                "name": "GTN Smörgåsbord 2: Tapas - SARS-CoV-2 Monitoring and Analysis with Galaxy"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data",
                "keywords": "Galaxy, Mutation calling, viral genome reconstruction, lineage assignment, clade assignment, SARS-CoV-2 sequencing data"
                "name": "GTN Smörgåsbord 2: Tapas - Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Automating Galaxy workflows using the command line",
                "keywords": "Automation, Galaxy workflows, command line"
                "name": "GTN Smörgåsbord 2: Tapas - Automating Galaxy workflows using the command line"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - The usegalaxy.* SARS-CoV-2 Bot in Action",
                "keywords": "Galaxy, usegalaxy, SARS-CoV-2 Bot"
                "name": "GTN Smörgåsbord 2: Tapas - The usegalaxy.* SARS-CoV-2 Bot in Action"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Accelerating Research through data sharing",
                "keywords": "Galaxy, Accelerating Research, data sharing"
                "name": "GTN Smörgåsbord 2: Tapas - Accelerating Research through data sharing"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Upload to ENA",
                "keywords": "Galaxy, Upload data, ENA"
                "name": "GTN Smörgåsbord 2: Tapas - Upload to ENA"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Uploading data to ENA",
                "keywords": "Galaxy, Upload data, ENA"
                "name": "GTN Smörgåsbord 2: Tapas - Uploading data to ENA"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Introduction to viral Beacon",
                "keywords": "Galaxy, viral Beacon"
                "name": "GTN Smörgåsbord 2: Tapas - Introduction to viral Beacon"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Using and Customising ObservableHQ",
                "keywords": "Galaxy, Customising, customise, ObservableHQ"
                "name": "GTN Smörgåsbord 2: Tapas - Using and Customising ObservableHQ"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - SRA Aligned read format in Galaxy",
                "keywords": "SRA Aligned, read format, Galaxy"
                "name": "GTN Smörgåsbord 2: Tapas - SRA Aligned read format in Galaxy"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Unicycler assembly of SARS-CoV-2 genome with preprocessing to remove human genome reads",
                "keywords": "Galaxy, Unicycler, assembly, SARS-CoV-2 genome, preprocessing, remove, clean, human genome reads"
                "name": "GTN Smörgåsbord 2: Tapas - Unicycler assembly of SARS-CoV-2 genome with preprocessing to remove human genome reads"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Pandemics Research using Mass Spectrometry",
                "keywords": "Galaxy, Pandemics Research, Mass Spectrometry, MS"
                "name": "GTN Smörgåsbord 2: Tapas - Pandemics Research using Mass Spectrometry"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Scripting Galaxy using the API and BioBlend",
                "keywords": "Galaxy, Scripting, coding, Galaxy, API, BioBlend"
                "name": "GTN Smörgåsbord 2: Tapas - Scripting Galaxy using the API and BioBlend"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/covid-analysis",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 2: Tapas - Case Studies: What you can do with SARS-COV-2 data",
                "keywords": "Galaxy, Case Studies, SARS-COV-2 data"
                "name": "GTN Smörgåsbord 2: Tapas - Case Studies: What you can do with SARS-COV-2 data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://faircookbook.elixir-europe.org/content/home.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIR Cookbook: hands-on recipes to make and keep data FAIR",
                "keywords": "FAIRcookbook, FAIR, recipes"
                "name": "FAIR Cookbook: hands-on recipes to make and keep data FAIR"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#societies",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: societies and alliances",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: societies and alliances"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#trainers",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: libraries and trainers",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: libraries and trainers"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://fairsharing.org/educational#developers",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module FAIRsharing for you: developers and curators",
                "keywords": "FAIRsharing, standards, databases, policies, FAIR"
                "name": "FAIRsharing for you: developers and curators"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis- Sequencing data analysis for a spectrum of viral genomes",
                "keywords": "Galaxy, Sequencing data analysis, spectrum, viral genomes"
                "name": "GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis- Sequencing data analysis for a spectrum of viral genomes"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - From NCBI's Sequence Read Archive (SRA) to Galaxy: SARS-CoV-2 variant analysis",
                "keywords": "Galaxy, Viral Pathogen Analysis, NCBI, Sequence Read Archive, SRA, SARS-CoV-2, variant analysis"
                "name": "GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - From NCBI's Sequence Read Archive (SRA) to Galaxy: SARS-CoV-2 variant analysis"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - Avian influenza viral strain analysis from gene segment sequencing data",
                "keywords": "Galaxy, Viral Pathogen Analysis, Avian influenza, viral strain, data analysis, gene segment, sequencing data"
                "name": "GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - Avian influenza viral strain analysis from gene segment sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - Pox virus genome analysis from tiled-amplicon sequencing data",
                "keywords": "Galaxy, Viral Pathogen Analysis, Pox virus, genome analysis, tiled-amplicon, sequencing data"
                "name": "GTN Smörgåsbord 3: OneHealth - Viral Pathogen Analysis - Pox virus genome analysis from tiled-amplicon sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Webinar: Implementation of NGS for TB- WHO documents and other considerations",
                "keywords": "Galaxy, Tuberculosis Sequence Analysis, Implementation, NGS, TB- WHO, documents, considerations"
                "name": "GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Webinar: Implementation of NGS for TB- WHO documents and other considerations"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Tuberculosis Variant Analysis",
                "keywords": "Galaxy, Tuberculosis Sequence Analysis, Tuberculosis, Variant Analysis"
                "name": "GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Tuberculosis Variant Analysis"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Webinar series: Concepts of drug-resistance prediction and mutation-based clustering",
                "keywords": "Galaxy, Tuberculosis Sequence Analysis, Concepts, drug-resistance, prediction, mutation-based, clustering"
                "name": "GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Webinar series: Concepts of drug-resistance prediction and mutation-based clustering"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Hands-on: Identifying tuberculosis transmission links: from SNPs to transmission clusters",
                "keywords": "Galaxy, Tuberculosis Sequence Analysis, Identifying, tuberculosis transmission, links,  SNPs, transmission clusters"
                "name": "GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Hands-on: Identifying tuberculosis transmission links: from SNPs to transmission clusters"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Introduction to phylogenetics",
                "keywords": "Galaxy, Tuberculosis Sequence Analysis, phylogenetics"
                "name": "GTN Smörgåsbord 3: OneHealth - Tuberculosis Sequence Analysis - Introduction to phylogenetics"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - An automated SARS-CoV-2 genome surveillance system built around Galaxy",
                "keywords": "Galaxy, Build, pathogen surveillance system, automated, automation, SARS-CoV-2, genome surveillance, system"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - An automated SARS-CoV-2 genome surveillance system built around Galaxy"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data",
                "keywords": "Galaxy, build, pathogen surveillance system, Mutation calling, viral genome, reconstruction, lineage/clade assignment, SARS-CoV-2, sequencing data"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Automating Galaxy workflows using the command line",
                "keywords": "Galaxy, Building, pathogen surveillance system, Automating, automation, workflows, command line"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Automating Galaxy workflows using the command line"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - The usegalaxy.* SARS-CoV-2 Bot in Action",
                "keywords": "Galaxy, Building, pathogen surveillance system, usegalaxy, SARS-CoV-2, Bot"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - The usegalaxy.* SARS-CoV-2 Bot in Action"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Removal of human reads from SARS-CoV-2 sequencing data",
                "keywords": "Galaxy, Building, pathogen surveillance system, Removal,human reads, SARS-CoV-2, sequencing data"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Removal of human reads from SARS-CoV-2 sequencing data"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/one-health",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Upload to ENA",
                "keywords": "Galaxy, Building, pathogen surveillance system, Upload data, ENA"
                "name": "GTN Smörgåsbord 3: OneHealth - Building a pathogen surveillance system with Galaxy - Upload to ENA"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - An overview of the RO-Crate concept and its implementations",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, RO-Crate concept, RO-Crate implementations"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - An overview of the RO-Crate concept and its implementations"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - Publishing My First™ RO-Crate",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Publishing"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - Publishing My First™ RO-Crate"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - RO-Crate in Python",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Python"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - RO-Crate in Python"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - Workflow Run RO-Crate Introduction",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Workflow Run, RO-Crate Introduction"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Building RO-Crates - Workflow Run RO-Crate Introduction"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Registering Galaxy workflows in WorkflowHub",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Publishing, Workflow, Registering, WorkflowHub"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Registering Galaxy workflows in WorkflowHub"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Best practices for workflows in GitHub repositories",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Publishing Workflow, GitHub repositories"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Best practices for workflows in GitHub repositories"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://gallantries.github.io/video-library/modules/ro-crate",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Submitting workflows to LifeMonitor",
                "keywords": "Galaxy, FAIR data, data provenance, RO-Crate, Publishing Workflow, Submitting workflows, LifeMonitor"
                "name": "GTN Smörgåsbord 3: FAIR data and provenance with RO-Crate and Galaxy - Publishing Workflow RO-Crates with Galaxy - Submitting workflows to LifeMonitor"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/1zD-6eico8ugfr3HyRAwngu8OfyNrtOOC/view?usp=share_link",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Data management in social sciences and humanities with DMEG",
                "keywords": "Life sciences, Social sciences, Health sciences, Research Data Management, tools, practices, use cases, challenges, DMEG, RDMkit, guidance"
                "name": "Data management in social sciences and humanities with DMEG"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/17Xxme5noOkfhVCv7RH8EkfUfqFGKNbzU/view?usp=share_link",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Data management in life sciences with RDMkit",
                "keywords": "Life sciences, Social sciences, Health sciences, Research Data Management, tools, practices, use cases, challenges, DMEG, RDMkit, guidance"
                "name": "Data management in life sciences with RDMkit"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/1tvKC8HtkNmXZ85T80N31nSDxFskkv9FD/view",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Challenges and issues in data management",
                "keywords": "Life sciences, Social sciences, Health sciences, Research Data Management, tools, practices, use cases, challenges, DMEG, RDMkit, guidance"
                "name": "Challenges and issues in data management"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://www.youtube.com/playlist?list=PLW-oxncaXRqU4XqduJzwFHvWLF06PvdVm",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Euro-BioImaging's Guide to FAIR BioImage Data 2023",
                "keywords": "FAIR, Bioimage, Data management"
                "name": "Euro-BioImaging's Guide to FAIR BioImage Data 2023"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://www.eurobioimaging.eu/news/great-success-of-euro-bioimagings-guide-to-fair-bioimage-data-2024/",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Euro-BioImaging's Guide to FAIR BioImage Data 2024",
                "keywords": "FAIR, Bioimage, Data management"
                "name": "Euro-BioImaging's Guide to FAIR BioImage Data 2024"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://doi.org/10.5281/zenodo.12168495",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module BY-COVID Spring 24 Baseline Use Case Workshop",
                "keywords": "Baseline Use Case, Real-world data, Policy questions, SARS-CoV-2 vaccination, real world data source, vaccination effectiveness"
                "name": "BY-COVID Spring 24 Baseline Use Case Workshop"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://zenodo.org/records/11220597",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Data sharing and reuse under GDPR - BY-COVID Fest workshop report",
                "keywords": "FAIR, GDPR, privacy, Research Data Management"
                "name": "Data sharing and reuse under GDPR - BY-COVID Fest workshop report"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/variant-analysis/tutorials/sars-cov-2-variant-discovery/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data",
                "keywords": "Mutation calling, viral genome, genome reconstruction, lineage assignment, clade assignment, SARS-CoV-2 sequencing data"
                "name": "Mutation calling, viral genome reconstruction and lineage/clade assignment from SARS-CoV-2 sequencing data"
              }
            `}
          </script >

          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/sequence-analysis/tutorials/human-reads-removal/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Removal of human reads from SARS-CoV-2 sequencing data",
                "keywords": "Removal, human reads, SARS-CoV-2 sequencing data"
                "name": "Removal of human reads from SARS-CoV-2 sequencing data"
              }
            `}
          </script >

          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/variant-analysis/tutorials/pox-tiled-amplicon/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Pox virus genome analysis from tiled-amplicon sequencing data",
                "keywords": "Pox virus, genome analysis, tiled-amplicon sequencing data"
                "name": "Pox virus genome analysis from tiled-amplicon sequencing data"
              }
            `}
          </script >

          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/variant-analysis/tutorials/aiv-analysis/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Avian influenza viral strain analysis from gene segment sequencing data",
                "keywords": "Avian influenza, viral strain, analysis, gene segment sequencing data"
                "name": "Avian influenza viral strain analysis from gene segment sequencing data"
              }
            `}
          </script >

          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/transcriptomics/tutorials/minerva-pathways/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Pathway analysis with the MINERVA Platform",
                "keywords": "Pathway analysis, MINERVA Platform"
                "name": "Pathway analysis with the MINERVA Platform"
              }
            `}
          </script >

          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://training.galaxyproject.org/training-material/topics/galaxy-interface/tutorials/upload-data-to-ena/tutorial.html",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Submitting sequence data to ENA",
                "keywords": "Submitting, submission, sequence data, ENA"
                "name": "Submitting sequence data to ENA"
              }
            `}
          </script >
          <script type="application/ld+json" >
            {`
              {
                "@context": "https://schema.org",
                "@type": "TrainingMaterial",
                "@id": "https://drive.google.com/file/d/1sViY_DaXjVRHsiNSw8k32pq3U_ukM7kn/view?usp=share_link",
                "dct:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE",
                "description": "These materials were developed in the context of the BY-COVID project, EU Grant Agreement 101046203, for the course module Maturity Model for Pathogen Data Platforms",
                "keywords": "Data platform, Maturity model, Pathogens, Personal metadata, ELIXIR-CONVERGE, BY-COVID, Workshop, SARS-CoV-2, Bacterial, FAIRness"
                "name": "Maturity Model for Pathogen Data Platforms"
              }
            `}
          </script >


          
        </Helmet>
        <Helmet>
          <body className={pageContext.frontmatter.class} />
        </Helmet>
        <Seo
          title={pageContext.frontmatter.title}
          description={pageContext.frontmatter.description}
          imageTwitter={pageContext.frontmatter.imageTwitter}
          imageOg={pageContext.frontmatter.imageOg}
          imageAlt={pageContext.frontmatter.imageAlt}
        />
        <Container>
          <Row>
            <Col>
              <Menu />
            </Col>
          </Row>
        </Container>
        <Container className="full-width">
          <Row className="mx-0">
            <Col>
              <div class="visually-hidden-focusable">
                <a href="#content">Skip to main content</a>
              </div>
              <main>
                <article id="content">
                  <Container className="px-3">
                    <Row>
                      <Col>
                        <h1>{pageContext.frontmatter.title}</h1>
                      </Col>
                    </Row>
                  </Container>
                  {children}
                </article>
              </main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
