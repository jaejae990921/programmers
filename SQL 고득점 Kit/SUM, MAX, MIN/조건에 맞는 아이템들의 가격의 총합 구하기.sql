SELECT SUM(ITEM.PRICE) AS TOTAL_PRICE
FROM ITEM_INFO ITEM
WHERE RARITY = 'LEGEND'