import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const CacheContext = createContext()

export function CacheProvider({ children }) {
  const [cacheDataRepos, setCacheDataRepos] = useState([])
  const [cacheDataInfo, setCacheDataInfo] = useState([])
  // const [cacheDataVercel, setCacheDataVercel] = useState([])

  const fetchDataRepos = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/MatheusAlmeidaSobrinho/repos'
      )
      const repositories = response.data
      setCacheDataRepos(repositories)
      console.log(repositories)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataRepos()
  }, [])

  const updateCacheDataRepo = async () => {
    fetchDataRepos()
  }

  const fetchDataInfo = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/MatheusAlmeidaSobrinho'
      )
      const infos = response.data
      setCacheDataInfo(infos)
      console.log(infos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataInfo()
  }, [])

  const updateCacheDataInfo = async () => {
    fetchDataInfo()
  }

  // const fetchDataVercel = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://cors-anywhere.herokuapp.com/https://github-readme-stats.vercel.app/api?username=MatheusAlmeidaSobrinho'
  //     )
  //     const vercels = response.data
  //     setCacheDataVercel(vercels)
  //     console.log(vercels)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchDataVercel()
  // }, [])

  // const updateCacheDataVercel = async () => {
  //   fetchDataVercel()
  // }

  return (
    <CacheContext.Provider
      value={{
        cacheDataRepos,
        cacheDataInfo,
        // cacheDataVercel,
        updateCacheDataRepo,
        updateCacheDataInfo
        // updateCacheDataVercel
      }}
    >
      {children}
    </CacheContext.Provider>
  )
}

CacheProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useCache() {
  return useContext(CacheContext)
}
