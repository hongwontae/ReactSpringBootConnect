package org.zerock.j2.entity;
// 상품 관련의 Entity

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@ToString(exclude = "images")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pno;

    private String pname;

    private String pdesc;

    private String writer;

    private int price;
    // column이 되니 조심하게 만들어야 된다.
    // delFlag
    private boolean delFlag;

    @ElementCollection(fetch = FetchType.LAZY)
    // @oneTomany 따라간다. 컬렉션의 값을 저장한다. 여기에서만 접근하여 image를 넣을 수 있다.
    // 값들은 컬렉션 형식으로 의존적인 관계로 넣을 거라서 이렇게 설계한다.
    @Builder.Default
    private List<ProductImage> images = new ArrayList<>();

    // 상품을 추가하는 method
    public void addImage(String name) {

        ProductImage pImage = ProductImage.builder().fname(name)
                .ord(images.size()).build();

        images.add(pImage);
    } 

    // 이미지 파일들을 싹 비워주는 method
    public void clearImages() {
        images.clear();
    }

    public void changePrice(int price) {
        this.price = price;
    }

    public void changePname(String pname) {
        this.pname = pname;
    }

    public void changePdesc(String pdesc) {
        this.pdesc = pdesc;
    }

    public void changeDel(boolean delFlag) {
        this.delFlag = delFlag;
    }


}
