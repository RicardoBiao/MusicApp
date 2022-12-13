/*
 * @Author: liweibiao
 * @Date: 2022-12-13 10:23:09
 * @LastEditTime: 2022-12-13 10:30:17
 * @LastEditors: liweibiao
 * @Description: 
 */
export default interface PlaylistParams {
    /** 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot' */
    order?: 'new' | 'hot',
    /** tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist) */
    cat?: string,
    /** 取出歌单数量 , 默认为 50 */
    limit?: number,
    /** 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值 */
    offset?: number,
    /** 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据 */
    before?: any,
}