var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc","url":"./pages/about/","title":"About"},{"text":"20170222W1上課內容 一.可至 2017 Spring 協同產品設計實習 觀看這學期的課程大綱 二. 了解如何使用stunnel 在按下start之後，會出現錯誤的圖案 ， 這是因為stunnel資料夾裡的config/styunnel.conf裡的ip與電腦的ip不同可至cmd打ipconfig/all的指令，找到電腦的ip位置並將其複製、貼到styunnel.conf裡 自己IP 修改IP(accept後面的IP) 三.開啟Leo 利用Scite編輯Start.bat 四.利用python程式碼控制Vrep裡的單連桿作動。 可至 課程倉儲 的data裡下載fourbar_eightbar_solvespace_vrep.7z以及onelink_vrep_remoteapi_pos_vel.7z並解壓縮，裡面有單連桿、四連桿及八連桿三個檔案，可試著在solvespace及Vrep裡開啟。 在Vrep裡開啟one_link_robot_remoteAPI.ttt的檔案(ttt是Vrep檔案的副檔名)，在SciTE裡開啟one_link_robot_remoteAPI_joint_target_vel.py的檔案，按下Tool裡的Go即可開始控制單連桿，按Enter會旋轉，按P會暫停。 第一週影片 stunnel設定 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo .","tags":"Course","url":"./W1.html","title":"2017/02/22 W1"},{"text":"20170301W2上課內容 一. 利用python找出缺課人員 程式碼可至 課程倉儲 下載 \"cd_w2.py\"座位程式碼，\"w2b_cadlab.txt\"座位表 座位程式碼 import os 讀取w2b_cadlab.txt的檔案將其儲存為adata，並設定encoding為utf-8 adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() 讀取w2b_registered.txt的檔案將其儲存為rdata，並一行一行隔開，並設定encoding為utf-8 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() 列印出adata，以便檢查結果 print(adata) 利用splitlines將adata一行一行隔開並其儲存為alist alist = adata.splitlines() 列印出alist[2]，以便檢查結果 print(alist[2]) 將變數n儲存為0 n = 0 將列從0開始算起 row = 0 將final_list儲存為一個空的數列 final_list = [] 將w2_list儲存為一個空的數列 w2_list = [] 執行一個for迴圈從第二列開始 for stud_num in alist[2:]: #每執行完一次迴圈列數+1 row = row + 1 #執行完迴圈後用\\將其隔開並儲存為blist blist = stud_num.split(\"\\t\") #列印出blist，以便檢查結果 #print(blist) #將行從0開始算起 column = 0 #執行一個for迴圈去取得blist裡的數列 for i in range(len(blist)): #每執行完一次迴圈行數+1 column = column + 1 #假如blist數列裡不是空白 if blist[i] != \"\": #列印出blist[i]，以便檢查結果 #print(blist[i]) #將組序有用_隔開的儲存為clist clist = blist[i].split(\" \") #將組序+ +學號+ +列+行的資料儲存為stud_data stud_data = clist[0]+\" \"+clist[1]+\" \"+str(row)+\" \"+str(column) #將stud_data結果附加在final_list的資料裡 final_list.append(stud_data) #將clist[1]結果附加在w2_list的資料裡 w2_list.append(clist[1]) #每執行完一次迴圈n+1 n = n +1 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) 列印出分組名單 print(\"分組名單:\") 執行一個for迴圈去取得group_list裡的數列 for i in range(len(group_list)): #列印出 group_list[i]的資料 print(group_list[i]) 列印出座位列表 print(\"座位列表:\") 執行一個for迴圈去取得final_list裡的數列 for i in range(len(final_list)): #列印出 final_list[i]的資料 print(final_list[i]) 執行一個for迴圈去取得rdata裡的數列 for i in range(len(rdata)): #假如有在rdata裡但沒有在w2_list裡，目的在找出缺席學生 if rdata[i] not in w2_list: #列印出 rdata[i]的資料，缺席學生 print(\"缺席學生:\", rdata[i]) 列印出學生總數n個 print(\"學生總數:\", n) print(os.environ) 二. 利用 Solvespace 進行四連桿機構組立並轉為st檔 先至 課程倉儲 下載\"fourbarlinkage\" 開啟SolveSpace畫 然後開啟fourbarlinkage裡的 link_30、link_50、link_60 並依序組裝形成四連桿 第二週影片 四連桿機構 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo .","tags":"Course","url":"./W2.html","title":"2017/03/01 W2"}]};