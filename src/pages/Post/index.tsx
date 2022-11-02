/* eslint-disable no-console */
import { useEffect, useMemo } from 'react'
import { getPostList } from 'redux/post/actions'
import { RootStateType } from 'redux/store'
import { useAppDispatch, useAppSelector } from 'utils/customHooks/reduxHook'
import { useApiData } from 'utils/customHooks/useApiData'

const Post = () => {
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector((state: RootStateType) => state)

  const handleGetAllPost = () => {
    dispatch(getPostList())
  }

  useEffect(() => {
    handleGetAllPost()
  }, [dispatch])

  useApiData(
    posts.status,
    posts.data,
    posts.error,
    useMemo(
      () => ({
        onFulfilled(data) {
          console.log(data)
        },
        onRejected(error) {
          console.log(error)
        },
        onPending() {
          console.log('pending')
        },
      }),
      [],
    ),
  )

  return (
    <>
      <p>Post Page</p>
    </>
  )
}

export default Post
